//code that is responsible for modifying the DOM

function clearDOMList() {
    var list = document.querySelector(".entryLog");
    list.innerHTML = '';
}

function addToDOM (card){
    document.querySelector(".entryLog").appendChild(card)
    document.querySelector(".entryLog").style.border = "1px solid blue";
}