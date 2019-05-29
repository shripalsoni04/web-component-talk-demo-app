const template = document.createElement('template');
template.innerHTML = `
  <style>
    .header {
      padding: 12px 16px;
      background-color: #0078b7;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 3px 3px 0 0;
      cursor: pointer;
    }

    .collapse-icons svg {
      fill: #fff;
    }

    .collapse-icons .chevron-down {
      display: none;
    }

    .collapse-icons .chevron-up {
      display: block;
    }

    .content {
      padding: 12px 16px;
      border: 1px solid #eaeaea;
      border-top: 0;
      border-radius: 3px;
    }

    .panel.collapsed .header {
      border-radius: 3px;
    }

    .panel.collapsed .content {
      display: none;
    }

    .panel.collapsed .header .collapse-icons .chevron-up {
      display: none;
    }

    .panel.collapsed .header .collapse-icons .chevron-down {
      display: block;
    }
  </style>
  <div class="panel">
    <div class="header">
      <div class="title">Panel Header</div>
      <div class="collapse-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="chevron-down">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="chevron-up">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
    <div class="content">Panel Content</div>
  </div>
`;

export class Panel extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  set title(title) {
    this._title = title;
    this.shadowRoot.querySelector('.title').innerText = title;

    // Optional: Reflect property value back to attribute
    if (this.getAttribute('title') !== title) {
      this.setAttribute('title', title);
    }
  }

  get title() {
    return this._title;
  }

  constructor() {
    super();

    // State initialization
    this.isCollapsed = false;

    // Attach shadowRoot and template of the component.
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Attach event listeners
    shadowRoot.querySelector('.header').addEventListener('click', () => {
      this.togglePanel();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.title = newValue;
    }
  }

  disconnectedCallback() {
    console.log('Panel custom element disconnected!!');
  }

  togglePanel() {
    this.isCollapsed = !this.isCollapsed;
    this.refreshPanelCollapseUIState();
  }

  refreshPanelCollapseUIState() {
    const panelEle = this.shadowRoot.querySelector('.panel');

    if (this.isCollapsed) {
      panelEle.classList.add('collapsed');
    } else {
      panelEle.classList.remove('collapsed');
    }
  }
}

customElements.define('sh-panel', Panel);
