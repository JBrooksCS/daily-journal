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
    journalEntries.push(objectsJournalEntry);
}




















