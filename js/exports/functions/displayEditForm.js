import * as variables from '../variables.js';

let displayEditForm = book => {
    variables.editFormTitle.style.display = 'block';
    variables.editFormContainer.style.display = 'block';

    let bookTitleField = document.getElementById('edit-book-title');
    let bookAuthorField = document.getElementById('edit-book-author');
    let bookPagesField = document.getElementById('edit-book-pages');
    let bookReadField = document.getElementById('edit-book-read');

    book.forEach(value => {
        bookTitleField.value = value.title;
        bookAuthorField.value = value.author;
        bookPagesField.value = value.pages;
        bookReadField.checked = value.read;
    });
};

export {
    displayEditForm
};