mainBlock = document.getElementById("main-block");

function renderUser(){
    let id = +localStorage.getItem('id');
    let mainBlockTemplate = document.getElementById("main-block-template").textContent;
    for (let i = 0; i < DATA.length; i++)
    {
        if (DATA[i].id === id)
        item = DATA[i];
    }
    let str = mainBlockTemplate
    .replace("PHOTO", item.photo)
    .replace("NAME", item.name + " " + item.surname)
    .replace("NAMENAT", item.nameNat + " " + item.surnameNat)
    .replace("DEPARTMENT", item.departament)
    .replace("ROOM", item.room)
    .replace("PHONE", item.phone)
    .replace("EMAIL", item.email)
    .replace("SKYPE", item.skype)
    .replace("HIREDATE", item.hireDate)
    .replace("STATUS", item.status);

    mainBlock.innerHTML = "";
    mainBlock.innerHTML = str;
}
    function goBack() {
        window.history.back();
    }

    renderUser();

 