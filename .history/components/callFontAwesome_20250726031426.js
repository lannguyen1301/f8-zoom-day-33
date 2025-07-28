// tạo hàm link font awesome
export function callFontAwesome(shadowRoot) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    shadowRoot.appendChild(link);
}
