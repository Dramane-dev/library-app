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

var myLibraryApp = {};
Object.defineProperties(myLibraryApp, {
    myLibrary: {
        value: [
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
        ],
        writable: true
    },
    objectInstances: {
        value: [],
        writable: true
    },
    home: {
        value: 'http://127.0.0.1:5500/html/index.html'
    },
    appTitle: {
        value: document.getElementById('title')
    },
    booksContainer: {
        value: document.getElementById('books-container')
    },
    formTitle: {
        value: document.getElementById('form-title-container')
    },
    formContainer: {
        value: document.getElementById('form-container')
    },
    editFormTitle: {
        value: document.getElementById('edit-form-title-container')
    },
    editFormContainer: {
        value: document.getElementById('edit-form-container')
    },
    submit: {
        value: document.getElementById('submit')
    },
    edit: {
        value: document.getElementById('edit')
    },
    cancel: {
        value: document.getElementById('cancel')
    },
    editCancel: {
        value: document.getElementById('edit-cancel')
    },
    bookTitle: {
        value: document.getElementById('book-title')
    },
    bookAuthor: {
        value: document.getElementById('book-author')
    },
    bookPages: {
        value: document.getElementById('book-pages')
    },
    bookRead: {
        value: document.getElementById('book-read')
    },
    editBookTitle: {
        value: document.getElementById('edit-book-title')
    },
    editBookAuthor: {
        value: document.getElementById('edit-book-author')
    },
    editBookPages: {
        value: document.getElementById('edit-book-pages')
    },
    editBookRead: {
        value: document.getElementById('edit-book-read')
    },
    addNewBook: {
        value: document.getElementById('add-new-book')
    },
    addNewBookBtn: {
        value: document.getElementById('add-new-book-btn')
    },
    noBookMsg: {
        value: document.getElementById('no-books')
    }
});

export {
    appTitle,
    myLibrary,
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
