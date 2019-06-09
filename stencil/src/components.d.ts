/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ShPanel {
    /**
    * Panel Title
    */
    'title': string;
    /**
    * Call this method to toggle panel content visibility programmatically.
    */
    'togglePanel': () => Promise<void>;
  }
}

declare global {


  interface HTMLShPanelElement extends Components.ShPanel, HTMLStencilElement {}
  var HTMLShPanelElement: {
    prototype: HTMLShPanelElement;
    new (): HTMLShPanelElement;
  };
  interface HTMLElementTagNameMap {
    'sh-panel': HTMLShPanelElement;
  }
}

declare namespace LocalJSX {
  interface ShPanel extends JSXBase.HTMLAttributes<HTMLShPanelElement> {
    /**
    * Event emitted on click of panel header.
    */
    'onToggle'?: (event: CustomEvent<{ isCollapsed: boolean }>) => void;
    /**
    * Panel Title
    */
    'title'?: string;
  }

  interface IntrinsicElements {
    'sh-panel': ShPanel;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


