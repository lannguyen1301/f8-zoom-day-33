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
    async connectedCallback() {
        // code...
        // khởi tạo css
        const style = await getSharedStyle();

        // khỏi tạo font awesome
        callFontAwesome(this.shadowRoot);

        // khởi tạo template app-main-tpl
        const template = document.querySelector("#app-main-tpl");
        const templateContent = template.content.cloneNode(true);

        // thêm file Shared.css vào web components
        this.shadowRoot.appendChild(style);
        console.log(style);

        // thêm dữ liệu vào web components
        this.shadowRoot.appendChild(templateContent);
    }
}

customElements.define("app-main", AppMainComponents);
