/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
//var dateSelected = new Date;
//var conceptsText = new String;
//var entryText = new String;
//var moodText = new String;
//Behold, the holder of the entry objects 
//var journalEntries = [];

function makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    //console.log(`Entry text : ${journalEntry.text}`)
    const fragment = document.createDocumentFragment()
    //Date
    const dateOfEntry = document.createElement('h3')
    dateOfEntry.textContent = (journalEntry.date)
    dateOfEntry.className = "entry_header"
    fragment.appendChild(dateOfEntry)
    //Concepts
    const concepts = document.createElement('p')
    concepts.textContent = "Concepts covered : " + (journalEntry.concepts)
    fragment.appendChild(concepts)
    //Entry
    const entry = document.createElement('p')
    entry.textContent = "Entry : " + (journalEntry.text)
    fragment.appendChild(entry)
    //Mood
    const mood = document.createElement('p')
    mood.textContent = "Mood : " + (journalEntry.mood)
    fragment.appendChild(mood)

    //add the fragment we've compiled to the DOM
    document.querySelector(".entryLog").appendChild(fragment)

    //apply style
    document.querySelector(".entryLog").style.border = "1px solid blue";
}
function clearDOMList() {
    var list = document.querySelector(".entryLog");
    list.innerHTML = '';
}
function logFields() {
    //might need to add exception for blank fields.. havent checked..
    dateSelected = document.getElementById('journalDate').value;
    conceptsText = document.getElementById('concepts').value;
    entryText = document.getElementById('entry').value;
    moodText = document.getElementById('mood').value;
    //create the object
    const objectsJournalEntry = /*JSON.stringify(*/ {
        date: dateSelected,
        concepts: conceptsText,
        text: entryText,
        mood: moodText
    }
    //console.log(objectsJournalEntry);

    //Update the DOM with the JSON entries/////////////////////////////
    fetch(`http://localhost:3000/entries`)
        .then(result => result.json()).then(entries => {
            //////////Add field data object to JSON object array

            //entries[entries.length+1] = objectsJournalEntry;
            entries.push(objectsJournalEntry);

            clearDOMList();
            ////iterate through JSON entry objects, adding them to the DOM
            entries.forEach(single_entry => {
                console.log(single_entry);
                makeJournalEntryComponent(single_entry)
            });
            //testing
            console.log(`Made it this far, also ${entries.length} is the length`);
        })
}


/*
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    console.log(this.responseText);
}
xhr.open('get','http://localhost:3000/entries');
xhr.send();
*/





















