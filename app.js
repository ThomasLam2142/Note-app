const createButton = document.querySelector(".createButton");
const allNotesContainer = document.querySelector(".allNoteContainer");
let noteidCounter = 0;

createButton.addEventListener("click", () => {
    // Iterate note counter
    noteidCounter += 1;

    // Create a new div element
    const newNote = document.createElement("div");
    const noteID = noteidCounter;

    // Give each note a unique ID
    newNote.id = "note" + noteID;

    // Set the content of the new note (you can customize this)
    newNote.textContent = "This is a new note.";

    // Add any additional styling or classes to the new note as needed
    newNote.classList.add("note");

    // Append the new note to the allNotesContainer
    allNotesContainer.appendChild(newNote);

    // Create a new Delete button
    const newDelete = document.createElement("button");
    newDelete.textContent = "Delete Note";
    newDelete.classList.add("deleteButton");
    

    // Delete Button logic
    newDelete.onclick = function () {
        // Find the parent note of the clicked delete button and remove it
        const parentNote = this.parentElement;
        parentNote.remove();
    };

    // Create a new Edit button
    const newEditbutton = document.createElement("button");
    newEditbutton.textContent = "Edit Note";
    newEditbutton.classList.add("editButton");
    newNote.appendChild(newEditbutton);

    //Append the Delete button after the edit button
    newNote.appendChild(newDelete);

    // Edit Button logic
    newEditbutton.onclick = function () {
        // Find the parent note of the clicked edit button
        const parentNote = this.parentElement;

        const lineBreak = document.createElement("br");
        parentNote.appendChild(lineBreak);
        parentNote.appendChild(lineBreak);
        

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.classList.add("editInput");
        parentNote.appendChild(editInput);

        const submitEdit = document.createElement("button");
        submitEdit.textContent = "Submit";
        submitEdit.classList.add("submitButton");
        parentNote.appendChild(submitEdit);

        

        // Submit Edit Button logic
        submitEdit.onclick = function () {
            // Find the input field within the same note
            const inputField = parentNote.querySelector(".editInput");
            
            // Update the note's text content with the input field's value
            parentNote.textContent = inputField.value;

            // Re-add the Delete and Edit buttons
            parentNote.appendChild(newEditbutton);
            parentNote.appendChild(newDelete);

            // Remove the Edit Input and Submit button
            parentNote.removeChild(lineBreak);
            parentNote.removeChild(editInput);
            parentNote.removeChild(submitEdit);
            
        };
    };
});
