const createButton = document.querySelector(".createButton");



createButton.addEventListener("click", () => {

    console.log("create button press");
})


const allNotesContainer = document.querySelector(".allNoteContainer");

createButton.addEventListener("click", () => {
    // Create a new div element
    const newNote = document.createElement("div");
    

    // Set the content of the new note (you can customize this)
    newNote.textContent = "This is a new note.";

    // Add any additional styling or classes to the new note as needed
    newNote.classList.add("note");
    

    // Append the new note to the allNotesContainer
    allNotesContainer.appendChild(newNote);
    
    const newDelete = document.createElement("button");

    newDelete.textContent = "Delete Note";

    newDelete.classList.add("deleteButton");

    newNote.appendChild(newDelete);
});

