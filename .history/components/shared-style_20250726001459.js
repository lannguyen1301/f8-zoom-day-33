// shared-style.js
let cachedStyle = null;

export async function getSharedStyle(url) {
    if (cachedStyle) return cachedStyle.cloneNode(true);

    const res = await fetch(url);
    const css = await res.text();

    const style = document.createElement("style");
    style.textContent = css;
    cachedStyle = style;
    return style.cloneNode(true);
}
