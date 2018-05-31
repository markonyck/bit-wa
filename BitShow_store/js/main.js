import { loadData, fetchSingleShow } from "./data.js";
import { showData, showSingleItem } from "./ui.js";

const setupEventListener = () => {
    $(document).on('click', ".show-card", function () {
        // get id
        let idValue = $(this).attr("data-id");
        // set to ls
        localStorage.setItem("id", idValue);
        // redirect to single page 
        location.href = "showInfoPage.html";
    });
}

export const initHomepage = () => {
    setupEventListener();
    const storageData = localStorage.getItem("shows");
    if (storageData) {
        const localShows = JSON.parse(storageData)
        showData(localShows);
    } else {

        loadData()
            .then((reformedList50) => {
                showData(reformedList50);
            })
    }


}

let id = localStorage.getItem("id");

console.log(id);


export const initSingleShow = () => {
    console.log('second page');
    fetchSingleShow(id)
        .then(showSingleItem);
}

    // $("#search-field").on("keyup", function(event){
    //     let input = this.value;
    //     data.searchShow(input, function(str){
    //        ui.dropdownDisplay(str);
    //     });
    // });

