//code that deals with getting the data
function updateEntries (entryObject) {
   /*
    if (entryObject.text !== ""){
        console.log(entryObject)
        fetch(`http://localhost:3000/entries`, {
            method: 'POST',
            body: entryObject
        }).then(
            response => response.json() // if the response is a JSON object
          ).then(
            success => console.log(success) // Handle the success response object
          ).catch(
            error => console.log(error) // Handle the error response object
          );

        //entries.push(entryObject);
    }
   else {
    fetch(`http://localhost:3000/entries`)
        .then(result => result.json()).then(entries => {
            clearDOMList();
            entries.forEach(single_entry => {
                //console.log(single_entry);
                let card = makeJournalEntryComponent(single_entry);
                addToDOM(card);
            })
        })
   } */
    //WORKING
    fetch(`http://localhost:3000/entries`)
        .then(result => result.json()).then(entries => {
            if (entryObject.text !== ""){
                entries.push(entryObject);
            }
            clearDOMList();
            entries.forEach(single_entry => {
                console.log(single_entry);
                let card = makeJournalEntryComponent(single_entry);
                addToDOM(card);

            })
        })
}