var sortClicked = false;

//code that deals with getting the data
function updateEntries(entryObject) {
    const blankEntry = (entryObject.text === "")
    if (blankEntry && sortClicked) {
        debugger
    }
    else {
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        }).then(result => {
            sortByDate()
        })
    }

}
function removeEntryAPI(entry) {
    console.log('Removing ', entry.id)

    return fetch('http://localhost:3000/entries' + `/` + entry.id, {
        method: 'delete'
    }).then(response =>
        response.json().then(json => {
            console.log(json)
            return json;
        })
    )
}
function sortByDate() {
    let newOrder = []
    let order = document.querySelector("#sortOption").value
    fetch(`http://localhost:3000/entries`)
        .then(result => result.json()).then(entries => {
            newOrder = entries.sort(function (a, b) {
                a = a.date.split('-').join('');
                b = b.date.split('-').join('');
                return a - b
            })
            if (order === "descending") {
                newOrder.reverse()
            }
            console.log(`Order is ${order}`)
            //console.log(newOrder)
            clearDOMList();
            newOrder.forEach(entry => {
                let card = makeJournalEntryComponent(entry);
                addToDOM(card);
            })
            let viewHide = document.querySelector(".view")
            //console.log(viewHide)
            if(sortClicked){
                document.querySelector(".previous_entries").style.display = "initial"
                viewHide.textContent = "Hide History"
            }
            else{
                document.querySelector(".previous_entries").style.display = "none"
                viewHide.textContent = "View History"
            }
        })
}
function showFields() {
    //let history = document.querySelector(".previous_entries")
    //history.style.display = "flex" //fix
    if(sortClicked === true){
        sortClicked = false;
    }
    else{
        sortClicked = true;
    }
    sortByDate()
}
