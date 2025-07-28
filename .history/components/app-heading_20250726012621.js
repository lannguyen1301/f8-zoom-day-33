// // gọi hàm getSharedStyle từ file shared-style.js
// import { getSharedStyle } from "./shared-style.js";

// class AppHeaderComponents extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//     }

//     async connectedCallback() {
//         // khởi tạo css
//         const style = await getSharedStyle("../assets/css/shared.css");
//         const template = document.querySelector("#app-heading-tpl");
//         const templateContent = template.content.cloneNode(true);

//         // thêm file Shared.css vào web components
//         this.shadowRoot.appendChild(style);
//         console.log(style);

//         // thêm dữ liệu vào web components
//         this.shadowRoot.appendChild(templateContent);
//     }
// }
// customElements.define("app-heading", AppHeaderComponents);

//
// gọi hàm getSharedStyle từ file shared-style.js
import { getSharedStyle } from "./shared-style.js";

class AppHeaderComponents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        // khởi tạo css
        const style = await getSharedStyle();
        const template = document.querySelector("#app-heading-tpl");
        const templateContent = template.content.cloneNode(true);

        // thêm file Shared.css vào web components
        this.shadowRoot.appendChild(style);
        console.log(style);

        // thêm dữ liệu vào web components
        this.shadowRoot.appendChild(templateContent);
    }
}
customElements.define("app-heading", AppHeaderComponents);
