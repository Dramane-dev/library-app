let myLibrary = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'Dramane',
        pages: '450',
        read: false
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: 'J.K. Rowling',
        pages: '450',
        read: true
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: 'J.K. Rowling',
        pages: '450',
        read: false
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: 'J.K. Rowling',
        pages: '450',
        read: true
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: 'J.K. Rowling',
        pages: '450',
        read: false
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        author: 'J.K. Rowling',
        pages: '450',
        read: false
    }
];
let objectInstances = [];
let editBook = [];
let appTitle = document.getElementById('title');
let booksContainer = document.getElementById('books-container');
let formTitle = document.getElementById('form-title-container');
let formContainer = document.getElementById('form-container');
let editFormTitle = document.getElementById('edit-form-title-container');
let editFormContainer = document.getElementById('edit-form-container');
let submit = document.getElementById('submit');
let edit = document.getElementById('edit');
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

export default editBook;

export {
    appTitle,
    myLibrary,
    objectInstances,
    booksContainer,
    formTitle,
    formContainer,
    editFormTitle,
    editFormContainer,
    submit,
    edit,
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

