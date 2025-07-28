// gọi hàm getSharedStyle từ file shared-style.js
import { getSharedStyle } from "./shared-style.js";

class AppHeaderComponents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // khởi tạo css
        const style = getSharedStyle("../assets/css/shared.css");
        const template = document.querySelector("#app-heading-tpl");
        const templateContent = template.content.cloneNode(true);

        // thêm file SharedArrayBuffer.css vào web components
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(templateContent);
    }
}
customElements.define("app-heading", AppHeaderComponents);
