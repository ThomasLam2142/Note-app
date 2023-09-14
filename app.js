const createButton = document.querySelector(".createButton");
const allNotesContainer = document.querySelector(".allNoteContainer");
let noteidCounter = 1;

createButton.addEventListener("click", () => {
    //iterate note counter
    noteidCounter += 1;

    // Create a new div element
    const newNote = document.createElement("div");
    const noteID = noteidCounter;

    //Give each note a ID
    newNote.id ="note" + noteID;
    console.log(newNote.id)

    // Set the content of the new note (you can customize this)
    newNote.textContent = "This is a new note.";

    // Add any additional styling or classes to the new note as needed
    newNote.classList.add("note");
    

    // Append the new note to the allNotesContainer
    allNotesContainer.appendChild(newNote);
    
    const newDelete = document.createElement("button");

    newDelete.textContent = "Delete Note";

    newDelete.classList.add("deleteButton");
    
    newDelete.onclick = function() {
        // Find the parent note of the clicked delete button and remove it
        const parentNote = this.parentElement;
        console.log("removed " + newNote.id)
        parentNote.remove();
    };

    newNote.appendChild(newDelete);
});


