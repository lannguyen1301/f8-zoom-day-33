// copy từ web components để làm mẫu xong thì xoá

import "./Components/app-heading.js";
import "./Components/app-modal.js";

// Open Modal
const openModalBtn = document.querySelector("#open-modal");
const appModal = document.querySelector("app-modal");

appModal.addEventListener("open", () => {
    // code...
    // alert("Da duoc mo");
    console.log("Da duoc mo");
});

appModal.addEventListener("close", () => {
    // code...
    // alert("Da dong");
    console.log("Da dong");
});

openModalBtn.addEventListener("click", () => {
    appModal.open();
});
