// Variables for HTML elements
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

// When the browswer is at the /notes path, select the following HTML elements
if (window.location.pathname === '/notes') {
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelectorAll('.list-container .list-group');
}

// Show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

// A function for getting the notes array as json data
const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// A function for saving a note as json data to the saved notes array in db.json
const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

// A function for deleting a note from the json data of saved notes by unique id
const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// A function to display the active note on the right side of the notes page
const renderActiveNote = () => {
  // Hide the save button
  hide(saveNoteBtn);

  // Show a saved note with existing id on the right side of the notes page & as read-only
  if (activeNote.id) {
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } 
    // otherwise, allow right side of the notes page to be editable and set to empty strings
    else {
    noteTitle.removeAttribute('readonly');
    noteText.removeAttribute('readonly');
    noteTitle.value = '';
    noteText.value = '';
  }
};

// A Function to save notes
const handleNoteSave = () => {
  // Create a new object from user inputs for noteTitle and noteText
  const newNote = {
    title: noteTitle.value,
    text: noteText.value,
  };
  // Pass that note through the saveNote function which uses a POST request to save to db.json
  // and then display all saved notes and active note
  saveNote(newNote).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
const handleNoteDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  // Variables for the note and note id (which is set as data attribute in code below)
  const note = e.target;
  const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

  // If it's the active note, remove it from the active note and set note input areas to empty
  if (activeNote.id === noteId) {
    activeNote = {};
  }

  // Pass the note ID through the deleteNote function which removes it from the db.json file by id
  // and then display all remaining saved notes and active note
  deleteNote(noteId).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
  renderActiveNote();
};

// Sets the activeNote to an empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
  activeNote = {};
  renderActiveNote();
};

// A function to determine whether to show or hide save button
const handleRenderSaveBtn = () => {
  // if the note Title or note text input areas are empty, don't show the save button
  if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteBtn);
  } else {
    // but if there's inputs in the Title and text areas, show the save button
    show(saveNoteBtn);
  }
};

// Render the list of note titles
const renderNoteList = async (notes) => {
  let jsonNotes = await notes.json();

  // if the browswer is on the /notes path, initially set the text of each element in the page's list of notes
  if (window.location.pathname === '/notes') {
    noteList.forEach((el) => (el.innerHTML = ''));
  }

  // an initial empty array of saved notes
  let noteListItems = [];

  // Returns HTML element with or without a delete button
  const createLi = (text, delBtn = true) => {
    // creating the list item with specified class for layout
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');

    // Creating the note Title as a span and clickable to render as active note
    const spanEl = document.createElement('span');
    spanEl.classList.add('list-item-title');
    spanEl.innerText = text;
    spanEl.addEventListener('click', handleNoteView);

    // Appending note Title to the list item in the unordered list
    liEl.append(spanEl);

    // Creating the delete button and making clickable to delete a note
    if (delBtn) {
      const delBtnEl = document.createElement('i');
      delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
      );
      delBtnEl.addEventListener('click', handleNoteDelete);
      // append delete button to list item of unordered list
      liEl.append(delBtnEl);
    }
    // return the note list item
    return liEl;
  };

  // If there are no saved notes, show a message as such in the unordered list
  if (jsonNotes.length === 0) {
    noteListItems.push(createLi('No saved Notes', false));
  }

  // Run each saved note's title through the createLi function
  // and give the list item an attribute of data-note with the note's json stringified data
  jsonNotes.forEach((note) => {
    const li = createLi(note.title);
    li.dataset.note = JSON.stringify(note);

    // push the note/list-item to the unordered list
    noteListItems.push(li);
  });

  // If the browser path is /notes then append each note/list-item to the unordered list
  if (window.location.pathname === '/notes') {
    noteListItems.forEach((note) => noteList[0].append(note));
  }
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => getNotes().then(renderNoteList);

// If the browswer path is /notes then add event listeners to the following HTML elements
if (window.location.pathname === '/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);
}

// Upon page load, check for and display saved notes on notes page
getAndRenderNotes();
