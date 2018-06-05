import { onLoad, loadCat }  from "./data.js";
import { mouseContent, catContent } from "./ui.js"

const setupEventListener = () => {
    $(document).on('click', ".mouseButton", function () {
        let src = loadCat();
        catContent(src);
    })
}

const setupEventListener2 = () => {
    $(document).on('click', ".catButton", function () {
        let src = onLoad();
        mouseContent(src);
    })
}

export const initHomepage = () => {
    let src = onLoad();
    mouseContent(src);
    setupEventListener();
    setupEventListener2();
}

