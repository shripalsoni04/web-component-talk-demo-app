class Panel extends HTMLElement {
  connectedCallback() {
    console.log('Panel custom element connected!!');
  }

  disconnectedCallback() {
    console.log('Panel custom element disconnected!!');
  }
}

customElements.define('sh-panel', Panel);
