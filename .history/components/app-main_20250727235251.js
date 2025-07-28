// class AppHeading extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//     }

//     connectedCallback() {
//         const template = document.querySelector("#app-heading-tpl");
//         const templateContent = template.content.cloneNode(true);
//         this.shadowRoot.appendChild(templateContent);
//     }
// }
// customElements.define("app-heading", AppHeading);

import { getSharedStyle } from "./shared-style.js";
import { callFontAwesome } from "./callFontAwesome.js";

class AppMainComponents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
}
