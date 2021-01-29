import { LitElement, html, css } from "lit-element";

class FormPersona extends LitElement {
  static get styles() {
    return css`
      .actions-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .invalid {
        border-color: #dc3545;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
      }
    `;
  }

  static get properties() {
    return { persona: Object };
  }

  constructor() {
    super();
    this.persona = {};
  }

  setPersonaAttr({ target }) {
    let tmp = { ...this.persona };
    tmp[target.name] = target.value;
    this.persona = tmp;
  }

  validarForm() {
    let requireds = this.shadowRoot.querySelectorAll(".required");
    let errors = 0;
    requireds.forEach((item) => {
      if (item.value.length === 0) {
        errors += 1;
        item.classList.add("invalid");
      } else {
        item.classList.remove("invalid");
      }
    });
    return errors === 0;
  }

  registrar() {
    if (this.validarForm()) {
      this.dispatchEvent(
        new CustomEvent("on-persona-value", {
          detail: this.persona,
          bubbles: true,
          composed: true,
        })
      );
      this.reset();
    }
  }

  reset() {
      this.persona = {};
      let requireds = this.shadowRoot.querySelectorAll(".required");
      requireds.forEach(item => {
          item.classList.remove('invalid');
      });
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      />
      <main class="form-content">
        <div class="mb-3">
          <label for="nombres" class="form-label">Nombre completo</label>
          <input
            @input="${this.setPersonaAttr}"
            name="nombres"
            class="form-control required"
            id="nombres"
            .value="${this.persona.nombres ? this.persona.nombres : ""}"
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            @input="${this.setPersonaAttr}"
            name="email"
            type="email"
            class="form-control required"
            id="email"
            .value="${this.persona.email ? this.persona.email : ""}"
          />
        </div>

        <div class="mb-3">
          <label for="telefono" class="form-label">Teléfono</label>
          <input
            @input="${this.setPersonaAttr}"
            name="telefono"
            class="form-control required"
            id="telefono"
            .value="${this.persona.telefono ? this.persona.telefono : ""}"
          />
        </div>

        <div class="actions-buttons">
          <button class="btn btn-secondary" @click="${this.reset}">Cancelar</button>
          <button class="btn btn-primary" @click="${this.registrar}">
            Registrar
          </button>
        </div>
      </main>
    `;
  }
}
customElements.define("form-persona", FormPersona);
