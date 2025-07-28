import { getSharedStyle } from "./shared-style.js";

class AppHeaderComponents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const template = document.querySelector("#app-heading-tpl");
        const templateContent = template.content.cloneNode(true);
        this.shadowRoot.appendChild(templateContent);
    }
}
customElements.define("app-heading", AppHeaderComponents);
