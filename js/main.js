import * as variables from './exports/variables.js';
import { getFormValues } from './exports/functions/getFormValues.js';
import { displayBook } from './exports/functions/displayBook.js';
import { hideAllBooks } from './exports/functions/hideAllBooks.js';
import { displayForm } from './exports/functions/displayForm.js';
import { displayEditForm } from './exports/functions/displayEditForm.js';
import { getEditFormValues } from './exports/functions/getEditFormValues.js';

export function Book(
    id,
    title,
    author,
    pages,
    read
) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

if (variables.storageObject.booksInStorage.value) {
    displayBook(variables.storageObject.booksInStorage.value);
}

if (!JSON.parse(variables.localStorage.getItem('Books')).length > 0) {
    variables.noBookMsg.style.display = 'block';
}
export var actualEditBtn = {};
Object.defineProperty(actualEditBtn, 'btn', {
    value: null,
    writable: true
});

let actualId;

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

    let id = variables.storageObject.booksInStorage.value.length + 1;

    variables.formTitle.style.display = 'none';
    variables.formContainer.style.display = 'none';

    getFormValues(variables, id);

    variables.booksContainer.style.display = 'flex';
});

variables.edit.addEventListener('click', (e) => {
    variables.editFormTitle.style.display = 'none';
    variables.editFormContainer.style.display = 'none';
    e.preventDefault();

    let editBook = [];
    let i = 0;
    let bookInStorageFiltered = variables.storageObject.booksInStorage.value.filter(
        book => book.id === actualId
    );

    getEditFormValues(editBook, bookInStorageFiltered);

    for (let book of bookInStorageFiltered) {
        book.title = editBook[0];
        book.author = editBook[1];
        book.pages = editBook[2];
        book.read = editBook[3];
    }

    variables.localStorage.setItem('Books', JSON.stringify(variables.storageObject.booksInStorage.value));

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

let editBtnList = document.querySelectorAll('.edit-book');

editBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        let actualBook = variables.storageObject.booksInStorage.value.filter(
            book => (book.title === btn.parentNode.parentNode.querySelector('p').textContent)
        );

        hideAllBooks();
        displayEditForm(actualBook);
        actualEditBtn.btn = btn;
        actualId = actualBook[0].id;
    });
});

let deleteBtnList = document.querySelectorAll('.delete-book');

deleteBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        variables.booksContainer.removeChild(btn.parentNode.parentNode);
        variables.storageObject.booksInStorage.value = JSON.parse(variables.localStorage.getItem('Books')).filter(
            book => book.title !== btn.parentNode.parentNode.querySelector('p').textContent
        );
        variables.localStorage.setItem('Books', JSON.stringify(variables.storageObject.booksInStorage.value));
        document.location.reload();
    }); 
});
