//code that deals with getting the data
function updateEntries(entryObject) {
    const blankEntry = (entryObject.text === "")

    if (blankEntry) {
        fetch(`http://localhost:3000/entries`)
            .then(result => result.json()).then(entries => {
                entries.forEach(single_entry => {
                    console.log('No new entry - populating from API');
                    let card = makeJournalEntryComponent(single_entry);
                    addToDOM(card);
                })
            })
    }
    else {
        // Use `fetch` with the POST method to add your entry to your API
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        }).then(result =>{
            clearDOMList();
            fetch(`http://localhost:3000/entries`)
            .then(result => result.json()).then(entries => {
                entries.forEach(single_entry => {
                    console.log(`Entry added, printing to DOM ${entries.length}`);
                    let card = makeJournalEntryComponent(single_entry);
                    addToDOM(card);
                })
            })
        })
    }
}
function removeEntryAPI (entry){
    console.log('Need to remove', entry.id)

    return fetch('http://localhost:3000/entries' + `/` + entry.id, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
}