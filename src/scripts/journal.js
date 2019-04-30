/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
//Set the default value of the date input to todays date
var today = new Date();
document.querySelector("#journalDate").value = today.toISOString().substr(0, 10);
let objectsJournalEntry = {
        date: "",
        concepts: "",
        text: "",
        mood: ""
};



function logFields() {
    //might need to add exception for blank fields.. havent checked..
    dateSelected = document.getElementById('journalDate').value;
    conceptsText = document.getElementById('concepts').value;
    entryText = document.getElementById('entry').value;
    moodText = document.getElementById('mood').value;
    //create the object
    objectsJournalEntry = /*JSON.stringify(*/ {
        date: dateSelected,
        concepts: conceptsText,
        text: entryText,
        mood: moodText
    }
    //console.log(`Before Stringify : ${objectsJournalEntry}`)
    //JSON.stringify(objectsJournalEntry)
    //console.log(`After Stringify : ${objectsJournalEntry}`)
    //reset input fields
    document.getElementById('journalDate').value = today.toISOString().substr(0, 10);
    document.getElementById('concepts').value = "";
    document.getElementById('entry').value = "";
    document.getElementById('mood').value = "";



    updateEntries(objectsJournalEntry);
}

updateEntries(objectsJournalEntry);

/*
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    console.log(this.responseText);
}
xhr.open('get','http://localhost:3000/entries');
xhr.send();
*/





















