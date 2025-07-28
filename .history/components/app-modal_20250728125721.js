class AppModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // cách 1
        // this.removeAttribute("hidden");

        // cách 2
        this.hidden = false;
    }

    open() {
        // Append Template
        const template = document.querySelector("#app-modal-tpl");
        const templateContent = template.content.cloneNode(true);
        this.shadowRoot.appendChild(templateContent);

        // this.addEventListener("click", () => {
        //     this.close();
        // });

        // Set heading
        const heading = this.shadowRoot.querySelector("#heading");
        heading.textContent = this.getAttribute("heading");
        this.dispatchEvent(new CustomEvent("open"));
        // heading nằm ở <app-modal id="" heading="Modal 1"></app-modal>

        this.shadowRoot.addEventListener("click", (e) => {
            if (e.target.closest("#close-btn")) {
                this.close();
            }
        });
    }
    close() {
        this.shadowRoot.innerHTML = "";

        this.dispatchEvent(new CustomEvent("close"));
    }
}

// gọi hàm
customElements.define("app-modal", AppModal);
