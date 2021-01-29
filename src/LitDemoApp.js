import { LitElement, html, css } from "lit-element";
import "./components/header-app/header-app.js";
import "./components/form-persona/form-persona.js";
import "./components/list-persona/list-persona.js";

export class LitDemoApp extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        --bg-color: #fff;
      }

      main {
        display: flex;
        align-items: center;
        padding: 15px;
      }

      .section {
        background-color: var(--bg-color);
        padding: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      .section-form {
        width: calc(35% - 15px);
        margin-right: 15px;
      }

      .section-list {
        width: 65%;
      }

      @media screen and (max-width: 768px) {
        main {
          flex-direction: column;
        }

        .section {
          margin-bottom: 15px;
          margin: 15px;
          margin-top: 0px;
        }

        .section-form,
        .section-list {
          width: calc(100% - 30px);
        }
      }
    `;
  }

  constructor() {
    super();
  }

  onRegister({ detail }) {
    console.log("onRegister", detail);
    let listPersonaCmp = this.shadowRoot.querySelector("list-persona");
    listPersonaCmp.setItemsList(detail);
  }

  render() {
    return html`
      <header-app title="Aplicación En Lit Element"></header-app>
      <main>
        <section class="section section-form">
          <form-persona @on-persona-value="${this.onRegister}"></form-persona>
        </section>
        <section class="section section-list">
          <list-persona></list-persona>
        </section>
      </main>
    `;
  }
}
