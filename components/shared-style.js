// let cachedStyle = null;

// export async function getSharedStyle(url) {
//     if (cachedStyle) return cachedStyle.cloneNode(true);

//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Failed to load CSS from ${url}`);
//     }

//     const css = await res.text();
//     const style = document.createElement("style");
//     style.textContent = css;

//     cachedStyle = style;
//     return style.cloneNode(true);
// }

let cachedStyle = null;

export async function getSharedStyle() {
    if (cachedStyle) return cachedStyle.cloneNode(true);

    const urls = [
        "/assets/css/variables.css",
        "/assets/css/reset.css",
        "/assets/css/shared.css",
    ];

    const style = document.createElement("style");

    for (const url of urls) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to load CSS from ${url}`);
        }

        const css = await res.text();
        style.textContent += css + "\n";
    }

    cachedStyle = style;
    return style.cloneNode(true);
}
