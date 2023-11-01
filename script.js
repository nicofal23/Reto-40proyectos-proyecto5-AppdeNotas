document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById("note-input");
    const addNoteButton = document.getElementById("add-note");
    const notesList = document.getElementById("notes-list");

    addNoteButton.addEventListener("click", function() {
        const noteText = noteInput.value;

        if (noteText.trim() === "") {
            alert("Por favor, escribe una nota.");
            return;
        }

        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.textContent = noteText;

        notesList.appendChild(noteElement);

        // Limpia el área de entrada
        noteInput.value = "";
    });
});
