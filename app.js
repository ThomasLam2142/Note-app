const createButton = document.querySelector(".createButton");
const allNotesContainer = document.querySelector(".allNoteContainer");
let noteidCounter = 0;

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
    

    //Below is Logic to create Delete button
    const newDelete = document.createElement("button");

    newDelete.textContent = "Delete Note";

    newDelete.classList.add("deleteButton");

    newNote.appendChild(newDelete);
    
    //Delete Button logic
    newDelete.onclick = function() {
        // Find the parent note of the clicked delete button and remove it
        const parentNote = this.parentElement;
        console.log("removed " + newNote.id)
        parentNote.remove();
    };

    
    const newEditbutton = document.createElement("button");

    newEditbutton.textContent = "Edit Note";

    newEditbutton.classList.add("editButton");

    newNote.appendChild(newEditbutton);
    
    //Delete Button logic
    newEditbutton.onclick = function() {
        // Find the parent note of the clicked delete button and remove it
        const parentNote = this.parentElement;
        console.log("edit " + newNote.id)
        
        const editInput = document.createElement("input");

        editInput.type = "text";

        editInput.classList.add("editInput");
        parentNote.appendChild(editInput);

        const submitEdit = document.createElement("button");

        submitEdit.textContent = "Submit";

        submitEdit.classList.add("submitButton");

        newNote.appendChild(submitEdit);

    };

    
});


