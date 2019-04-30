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
    //create an object to pass
    objectsJournalEntry = {
        date: document.getElementById('journalDate').value,
        concepts: document.getElementById('concepts').value,
        text: document.getElementById('entry').value,
        mood: document.getElementById('mood').value
    }
    //reset input fields
    document.getElementById('journalDate').value = today.toISOString().substr(0, 10);
    document.getElementById('concepts').value = "";
    document.getElementById('entry').value = "";
    document.getElementById('mood').value = "";

    updateEntries(objectsJournalEntry);
}
//Initial Update from API
updateEntries(objectsJournalEntry);

/*
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    console.log(this.responseText);
}
xhr.open('get','http://localhost:3000/entries');
xhr.send();
*/





















