var sortClicked = false;

//code that deals with getting the data
function updateEntries(entryObject) {
    const blankEntry = (entryObject.text === "")

    if (blankEntry) {
        //TO DO - add something that only lets this srtByDate get called if the filter element has been clicked at least once.
        if(sortClicked){
            sortByDate()
        }
        //sortByDate()
        //prompt("Enter Journal Entry!")
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
            return json;
        })
    );
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
            console.log(newOrder)
            clearDOMList();
            newOrder.forEach(entry => {
                let card = makeJournalEntryComponent(entry);
                addToDOM(card);
            })
        })
}
function showEntries(){
    sortClicked = true;
}
function showFields(){
    let history = document.querySelector(".previous_entries")
    console.log(history.style.visibility = "visible")
}
