//code that is responsible for creating the journal entry HTML component

function makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    //console.log(`Entry text : ${journalEntry.text}`)
    const entryCard = document.createElement('div')
    entryCard.className = "card";
    //Date
    const dateOfEntry = document.createElement('h3')
    formatDate(journalEntry.date);
    dateOfEntry.textContent = (formatDate(journalEntry.date))
    dateOfEntry.className = "entry_header"
    entryCard.appendChild(dateOfEntry)
    //Concepts
    const concepts = document.createElement('p')
    concepts.textContent = "Concepts covered : " + (journalEntry.concepts)
    entryCard.appendChild(concepts)
    //Entry
    const entry = document.createElement('p')
    entry.textContent = "Entry : " + (journalEntry.text)
    entryCard.appendChild(entry)
    //Mood
    const mood = document.createElement('p')
    mood.textContent = "Mood : " + (journalEntry.mood)
    entryCard.appendChild(mood)
    //ADD Delete Button
    const removebtn = document.createElement('button')
    removebtn.className = "remove";
    removebtn.textContent = "DELETE";
    entryCard.appendChild(removebtn);
    removebtn.addEventListener("click", function(event){
        //console.log(event.target);
        let container = removebtn.parentNode;
        container.removeChild(removebtn);
        container.parentNode.removeChild(container);
    })

    return entryCard;
    //add the entryCard we've compiled to the DOM
    //addToDOM(entryCard);
}

function formatDate(Year_Mo_Da) {
    if (Year_Mo_Da[2] !== '-'){
    const year = Year_Mo_Da.substr(0,4);
    const month = Year_Mo_Da.substr(5,2);
    const day = Year_Mo_Da.substr(8,2);
    //console.log(month +'-'+ day +'-'+ year);
    return (month +'-'+ day +'-'+ year);
    }
    else{
        return Year_Mo_Da;
    }
}