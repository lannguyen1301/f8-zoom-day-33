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
import { callFontAwesome } from "./callFontAwesome.js";

// gọi hàm font awesome
// import { callFontAwesome } from "./callFontAwesome.js";

class AppHeaderComponents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        // khởi tạo css
        const style = await getSharedStyle();

        // khỏi tạo font awesome
        callFontAwesome(this.shadowRoot);

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
