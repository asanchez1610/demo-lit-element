import { LitElement, html, css } from "lit-element";

class ListPersona extends LitElement {
  static get styles() {
    return css`
    .non-data {
        width: 100%;
        text-align: center;
        padding: 5px;
    }
    .hide{
        display: none;
    }
    `;
  }

  static get properties() {
    return { items: Array };
  }

  constructor() {
      super();
      this.items = [];
  }
  
  setItemsList(item) {
    let temp = [...this.items];
    temp.push(item);
    this.items = temp;
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      />
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          ${this.items.map(
            (item) =>
              html`
                <tr>
                  <td>${item.nombres}</td>
                  <td>${item.email}</td>
                  <td>${item.telefono}</td>
                </tr>
              `
          )}
        </tbody>
      </table>
      <div class="non-data${this.items.length > 0 ? ' hide' : ''}" >No se encontraron resultados para mostrar.</div>
    `;
  }
}
customElements.define("list-persona", ListPersona);
