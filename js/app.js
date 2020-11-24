let cards = document.getElementById("cards");
let card = document.getElementById("card");
let mainBlock = document.getElementById("main-block");
let blabla = document.getElementById("blabla");
let gridView = document.getElementById("grid-view");
let tableView = document.getElementById("table-view");
let resultStats = document.getElementById("result-stats");
let searchField = document.getElementById("search-field");
let searchButton = document.getElementById("search-button");
let searchForm = document.getElementById("search-form");
let tableViewIcon = document.getElementById("table-view-icon");
let gridViewIcon = document.getElementById("grid-view-icon");
let mainBlockInfo = document.getElementById("main-block-info");
let test = document.getElementById("test");
let categoriesTemplate = document.getElementById("categories-template").content.querySelector('.categories');
let gridViewTemplateNew = document.getElementById("grid-view-template");
let gridViewTemplate = document.getElementById("grid-view-template").textContent;
let tableViewTemplate = document.getElementById("table-view-template").textContent;
let flagView = 0;  //Вид отображения карточек (0 - gridView, 1 - tableView)
let arrayToOutput = DATA; 

function search() {
    arrayToOutput = [];
    DATA.forEach(elem => {
        let nameAndSurname = `${elem.name} ${elem.surname}`;
        let nameNatAndSurnameNat = `${elem.nameNat} ${elem.surnameNat}`;
        if (nameAndSurname.toLowerCase() === searchField.value.toLowerCase() ||
            nameNatAndSurnameNat.toLowerCase() === searchField.value.toLowerCase() ||
            elem.name.toLowerCase() === searchField.value.toLowerCase() ||
            elem.surname.toLowerCase() === searchField.value.toLowerCase() ||
            elem.nameNat.toLowerCase() === searchField.value.toLowerCase() ||
            elem.surnameNat.toLowerCase() === searchField.value.toLowerCase()
        ) {
            arrayToOutput.push(elem);
        }
    })
    cards.innerHTML = "";
    render();
    searchField.value = "";
}

function render() { 
    if (flagView === 0) {
        let str = arrayToOutput.map(item => {
            return gridViewTemplate
                .replace("Photo", item.photo)
                .replace("Name", item.name + " " + item.surname)
                .replace("NameNat", item.nameNat + " " + item.surnameNat)
                .replace("Department", item.departament)
                .replace("Room", item.room)
                .replace("Id", item.id)
        }).join(" ");
        test.innerHTML = "";
        cards.innerHTML = str;
    } else {
        test.appendChild(categoriesTemplate);
        let str = arrayToOutput.map(item => {
            return tableViewTemplate
                .replace("Photo", item.photo)
                .replace("Name", item.name + " " + item.surname)
                .replace("NameNat", item.nameNat + " " + item.surnameNat)
                .replace("Department", item.departament)
                .replace("Room", item.room)
                .replace("Id", item.id)
        }).join(" ");
        test.appendChild(categoriesTemplate);
        cards.innerHTML += str;
    }
    resultStats.innerHTML = arrayToOutput.length + " employees displayed";
}

searchButton.addEventListener("click", search);

searchField.addEventListener("keypress", function (e) {
    if (e.key === "Enter")
        search();
});

tableView.addEventListener("click", function () {
    gridViewIcon.classList.remove("view-active");
    tableViewIcon.classList.add("view-active");
    cards.innerHTML = "";
    flagView = 1;
    render();
});

gridView.addEventListener("click", function () {
    gridViewIcon.classList.add("view-active");
    tableViewIcon.classList.remove("view-active");
    cards.innerHTML = "";
    flagView = 0;
    render();
});

cards.onclick = function(event) {
    let id = +event.target.closest("a").getAttribute("id");
    localStorage.setItem('id', id);
};
 

viewFlag = 0;
render();