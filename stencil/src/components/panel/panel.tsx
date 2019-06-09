import { Component, Prop, h, State, Event, EventEmitter, Method } from "@stencil/core";

@Component({
  tag: "sh-panel",
  styleUrl: "panel.scss",
  shadow: true
})
export class PanelComponent {
  /**
   * Panel Title
   */
  @Prop({ reflectToAttr: true }) title: string;

  /**
   * Internal panel collapse state.
   * On change of this state, template will be re-rendered.
   */
  @State() isCollapsed: boolean = false;

  /**
   * Event emitted on click of panel header.
   */
  @Event() toggle: EventEmitter<{ isCollapsed: boolean }>;

  /**
   * Call this method to toggle panel content visibility programmatically.
   */
  @Method()
  async togglePanel() {
    this.isCollapsed = !this.isCollapsed;
  }

  handleHeaderClick() {
    this.togglePanel();
    this.toggle.emit({ isCollapsed: this.isCollapsed });
  }

  render() {
    return (
      <div class={`panel ${this.isCollapsed ? 'collapsed' : ''}`}>
        <div class="header" onClick={this.handleHeaderClick.bind(this)}>
          <div class="title">{this.title}</div>
          <div class="right-side-content">
            <slot name="header-extra-content" />
            <div class="collapse-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="chevron-down"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                <path fill="none" d="M0 0h24v24H0V0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="chevron-up"
              >
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div class="content">
          <slot>Default Panel Content...</slot>
        </div>
      </div>
    );
  }
}
