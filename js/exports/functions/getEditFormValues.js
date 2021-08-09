import * as variables from '../variables.js';

let getEditFormValues = editBook => {
    editBook.push(variables.editBookTitle.value);
    editBook.push(variables.editBookAuthor.value);
    editBook.push(variables.editBookPages.value);
    editBook.push(variables.editBookRead.checked);
};

export {
    getEditFormValues
};