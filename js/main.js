import * as variables from './exports/variables.js';
import { getFormValues } from './exports/functions/getFormValues.js';
import { displayBook } from './exports/functions/displayBook.js';
import { hideAllBooks } from './exports/functions/hideAllBooks.js';

export function Book(
    title,
    author,
    pages,
    read
) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let booksContainer = document.querySelector('.books-container');

window.setInterval(() => {
    if (!booksContainer.contains(document.querySelector('.book-card'))) {
        variables.noBookMsg.style.display = 'block';
    } else {
        variables.noBookMsg.style.display = 'none';
    }
}, 100);

variables.appTitle.addEventListener('click', () => {
    location.reload();
});

variables.addNewBookBtn.addEventListener('click', () => {
    hideAllBooks();
    
    variables.formTitle.style.display = 'block';
    variables.formContainer.style.display = 'block';
});

variables.addNewBook.addEventListener('click', () => {
    hideAllBooks();
    
    variables.formTitle.style.display = 'block';
    variables.formContainer.style.display = 'block';
});

variables.submit.addEventListener('click', () => {
    let id = variables.myLibrary.length - 1;

    variables.formTitle.style.display = 'none';
    variables.formContainer.style.display = 'none';

    getFormValues(variables, id);

    variables.booksContainer.style.display = 'flex';
});

displayBook(variables.myLibrary);

let deleteBtnList = document.querySelectorAll('.delete-book');

deleteBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        variables.booksContainer.removeChild(btn.parentNode);
    }); 
});
