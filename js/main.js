import * as variables from './exports/variables.js';
import { initInstance } from './exports/functions/initInstance.js';
import { getFormValues } from './exports/functions/getFormValues.js';
import { displayBook } from './exports/functions/displayBook.js';
import { hideAllBooks } from './exports/functions/hideAllBooks.js';
import { displayForm } from './exports/functions/displayForm.js';
import { displayEditForm } from './exports/functions/displayEditForm.js';
import { getEditFormValues } from './exports/functions/getEditFormValues.js';

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

initInstance();

let booksContainer = document.querySelector('.books-container');
let actualEditBtn;

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
    displayForm();
});

variables.addNewBook.addEventListener('click', () => {
    hideAllBooks();
    displayForm();
});

variables.submit.addEventListener('click', (e) => {
    e.preventDefault();

    let id = variables.myLibrary.length - 1;

    variables.formTitle.style.display = 'none';
    variables.formContainer.style.display = 'none';

    getFormValues(variables, id);

    variables.booksContainer.style.display = 'flex';
});

variables.edit.addEventListener('click', (e) => {
    let editBook = [];
    let i = 0;

    e.preventDefault();

    variables.formTitle.style.display = 'none';
    variables.formContainer.style.display = 'none';

    getEditFormValues(editBook);

    console.log(actualEditBtn);
    actualEditBtn.parentNode.parentNode.querySelectorAll('p').forEach(data => {
        data.textContent = editBook[i];
        i++;
    });

    variables.booksContainer.style.display = 'flex';
});

displayBook(variables.myLibrary);

let editBtnList = document.querySelectorAll('.edit-book');

editBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        let actualBook = variables.objectInstances.filter(
            book => book.title === btn.parentNode.parentNode.querySelector('p').textContent
        );

        hideAllBooks();
        displayEditForm(actualBook);

        actualEditBtn = btn;
    });
});

let deleteBtnList = document.querySelectorAll('.delete-book');

deleteBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        variables.booksContainer.removeChild(btn.parentNode.parentNode);
    }); 
});
