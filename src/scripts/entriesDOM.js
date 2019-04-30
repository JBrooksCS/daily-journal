//code that is responsible for modifying the DOM

function clearDOMList() {
    var list = document.querySelector(".entryLog");
    list.innerHTML = '';


}

function addToDOM (card){
    document.querySelector(".entryLog").appendChild(card)
    //apply style only after an element has been added
    //Later will want to check for empty list after delete and remove border
    document.querySelector(".entryLog").style.border = "1px solid blue";
}