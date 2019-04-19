/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
//Set the default value of the date input to todays date
var today = new Date();
document.querySelector("#journalDate").value = today.toISOString().substr(0, 10);


function makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    //console.log(`Entry text : ${journalEntry.text}`)
    const entryCard = document.createElement('div')
    entryCard.className = "card";
    //Date
    const dateOfEntry = document.createElement('h3')
    dateOfEntry.textContent = (journalEntry.date)
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

    //add the entryCard we've compiled to the DOM
    document.querySelector(".entryLog").appendChild(entryCard)

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

            //attempt to add to JSON..probably isn't correct
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





















