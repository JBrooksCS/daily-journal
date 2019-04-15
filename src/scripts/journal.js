/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
var dateSelected = new Date;
var conceptsText = new String;
var entryText = new String;
var moodText = new String;
//Behold, the holder of the entry objects 
var journalEntries = [];

function makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    const fragment = document.createDocumentFragment()
    //Date
    const dateOfEntry = document.createElement('h3')
    dateOfEntry.textContent = (journalEntry.EntryDate)
    dateOfEntry.className = "entry_header"
    fragment.appendChild(dateOfEntry)
    //Concepts
    const concepts = document.createElement('p')
    concepts.textContent = "Concepts covered : " + (journalEntry.Concepts)
    fragment.appendChild(concepts)
    //Entry
    const entry = document.createElement('p')
    entry.textContent =  "Entry : " + (journalEntry.Entry)
    fragment.appendChild(entry)
    //Mood
    const mood = document.createElement('p')
    mood.textContent = "Mood : " + (journalEntry.Mood)
    fragment.appendChild(mood)

    //document.querySelector(".entryLog").appendChild(fragment)
    document.querySelector(".entryLog").appendChild(fragment)
    
    //apply style
    document.querySelector(".entryLog").style.border = "1px solid blue";
    


    /*
    return `<div class="entry">
    <H1 class="date">${journalEntry.Date}</H1>
    <p class="concepts">${journalEntry.Concepts}</p>
    <p class="entry">${journalEntry.Entry}</p>
    <p class="mood"> ${journalEntry.Mood}</p>
    </div>
    `
    */
}

function logFields() {
    //might need to add exception for blank fields.. havent checked..
    dateSelected = document.getElementById('journalDate').value;
    conceptsText = document.getElementById('concepts').value;
    entryText = document.getElementById('entry').value;
    moodText = document.getElementById('mood').value;
   //create the object
    const objectsJournalEntry = {
        EntryDate: dateSelected,
        Concepts: conceptsText,
        Entry: entryText,
        Mood: moodText
    }
    //Adding to the array, not necessary for DOM addition as of now
    journalEntries.push(objectsJournalEntry);
    //add to the DOM
    makeJournalEntryComponent(objectsJournalEntry);
    //Need to reset fields
    //
}





















