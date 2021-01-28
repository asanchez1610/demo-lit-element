import { LitElement, html, css } from "lit-element";

class HeaderApp extends LitElement {
  static get styles() {
    return css`
    header {
        margin: 0;
        width: calc(100% - 30px);
        height: 60px;
        background-color: #043263;
        color: white;
        display: flex;
        align-items: center;
        font-size: 1.15em;
        padding-left: 15px;
        padding-right: 15px;
    }
    `;
  }

  static get properties() {
    return {
      title: String,
    };
  }

  constructor() {
    super();
    this.title = "My Aplication!";
  }

  render() {
    return html` 
        <header>${this.title}</header> 
    `;
  }
}
customElements.define("header-app", HeaderApp);
