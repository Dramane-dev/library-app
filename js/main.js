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

variables.submit.addEventListener('click', () => {
    variables.formTitle.style.display = 'none';
    variables.formContainer.style.display = 'none';

    getFormValues(variables);

    variables.booksContainer.style.display = 'flex';
});

variables.addNewBookBtn.addEventListener('click', () => {
    hideAllBooks();
    
    variables.formTitle.style.display = 'block';
    variables.formContainer.style.display = 'block';
});

displayBook(variables.myLibrary);