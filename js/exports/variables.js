let localStorage = window.localStorage;
let storageObject = {
    booksInStorage: {
        value: JSON.parse(localStorage.getItem('Books')),
        writable: true
    }
};
let objectInstances = [];
let home = 'http://127.0.0.1:5500/html/index.html';
let appTitle = document.getElementById('title');
let booksContainer = document.getElementById('books-container');
let formTitle = document.getElementById('form-title-container');
let formContainer = document.getElementById('form-container');
let editFormTitle = document.getElementById('edit-form-title-container');
let editFormContainer = document.getElementById('edit-form-container');
let submit = document.getElementById('submit');
let edit = document.getElementById('edit');
let cancel = document.getElementById('cancel');
let editCancel = document.getElementById('edit-cancel');
let bookTitle = document.getElementById('book-title');
let bookAuthor= document.getElementById('book-author');
let bookPages = document.getElementById('book-pages');
let bookRead = document.getElementById('book-read');
let editBookTitle = document.getElementById('edit-book-title');
let editBookAuthor= document.getElementById('edit-book-author');
let editBookPages = document.getElementById('edit-book-pages');
let editBookRead = document.getElementById('edit-book-read');
let addNewBookBtn = document.getElementById('add-new-book');
let addNewBook = document.getElementById('add-new-book-btn');
let noBookMsg = document.getElementById('no-books');

export {
    appTitle,
    localStorage,
    storageObject,
    objectInstances,
    home,
    booksContainer,
    formTitle,
    formContainer,
    editFormTitle,
    editFormContainer,
    submit,
    edit,
    cancel,
    editCancel,
    bookTitle,
    bookAuthor,
    bookPages,
    bookRead,
    editBookTitle,
    editBookAuthor,
    editBookPages,
    editBookRead,
    addNewBookBtn,
    addNewBook,
    noBookMsg
};
