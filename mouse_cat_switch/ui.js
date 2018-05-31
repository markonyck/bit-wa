export const mouseContent = (src) => {
    const $divCat = $(".cats");
    $divCat.html("");
    const $divMouse = $(".mouses");
    const content = (`
    <form action="">
            <input type="button" class="mouseButton" value = 'click me'>
        </form>
        <img src=${src} alt="">
        `)
   $divMouse.html(content);
}

export const catContent = (src) => {
    const $divMouse = $(".mouses");
    $divMouse.html("");
    const $divCat = $(".cats");
    const content = (`
    <form action="">
            <input type="button" class="catButton" value = 'click me'>
        </form>
        <img src=${src} alt="">
        `)
   $divCat.html(content);
}




