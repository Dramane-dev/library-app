let myLibrary = [
    {
        title: 'Harry Potter et la chambre des secrets',
        author: 'JK. Rolling',
        pages: '450',
        read: false
    },
    {
        title: 'Harry Potter et la chambre des secrets',
        author: 'JK. Rolling',
        pages: '450',
        read: true
    },
    {
        title: 'Harry Potter et la chambre des secrets',
        author: 'JK. Rolling',
        pages: '450',
        read: false
    },
    {
        title: 'Harry Potter et la chambre des secrets',
        author: 'JK. Rolling',
        pages: '450',
        read: true
    },
    {
        title: 'Harry Potter et la chambre des secrets',
        author: 'JK. Rolling',
        pages: '450',
        read: false
    },
    {
        title: 'Harry Potter et la chambre des secrets',
        author: 'JK. Rolling',
        pages: '450',
        read: false
    }
];
let appTitle = document.getElementById('title');
let booksContainer = document.getElementById('books-container');
let formTitle = document.getElementById('form-title-container');
let formContainer = document.getElementById('form-container');
let submit = document.getElementById('submit');
let bookTitle = document.getElementById('book-title');
let bookAuthor= document.getElementById('book-author');
let bookPages = document.getElementById('book-pages');
let bookRead = document.getElementById('book-read');
let addNewBookBtn = document.getElementById('add-new-book');
let addNewBook = document.getElementById('add-new-book-btn');
let noBookMsg = document.getElementById('no-books');

export {
    appTitle,
    myLibrary,
    booksContainer,
    formTitle,
    formContainer,
    submit,
    bookTitle,
    bookAuthor,
    bookPages,
    bookRead,
    addNewBookBtn,
    addNewBook,
    noBookMsg
};

