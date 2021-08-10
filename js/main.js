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
export var actualEditBtn = {};
Object.defineProperty(actualEditBtn, 'btn', {
    value: null,
    writable: true
});

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
    if (variables.editFormTitle.style.display === 'block' && variables.editFormContainer.style.display === 'block') {
        variables.editFormTitle.style.display = 'none';
        variables.editFormContainer.style.display = 'none';
        displayForm();
    } else {
        hideAllBooks();
        displayForm();
    }
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

    variables.editFormTitle.style.display = 'none';
    variables.editFormContainer.style.display = 'none';

    getEditFormValues(editBook);

    actualEditBtn.btn.parentNode.parentNode.querySelectorAll('p').forEach(data => {
        data.textContent = editBook[i];
        i++;
    });

    variables.booksContainer.style.display = 'flex';
});

variables.cancel.addEventListener('click', () => {
    window.location.href = variables.home;
});

variables.editCancel.addEventListener('click', () => {
    window.location.href = variables.home;
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

        actualEditBtn.btn = btn;
    });
});

let deleteBtnList = document.querySelectorAll('.delete-book');

deleteBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        variables.booksContainer.removeChild(btn.parentNode.parentNode);
    }); 
});
