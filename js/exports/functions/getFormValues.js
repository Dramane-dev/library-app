import * as variables from '../variables.js';
import { Book } from '../../main.js';
import { addBookToLibrary } from './addBookToLibrary.js';

export function getFormValues(fields, id) {
    const book = new Book(
        id,
        fields.bookTitle.value,
        fields.bookAuthor.value,
        fields.bookPages.value,
        fields.bookRead.checked
    );

    if (variables.storageObject.booksInStorage.value) {
        variables.storageObject.booksInStorage.value.push(book);
        variables.localStorage.setItem(
            'Books', 
            JSON.stringify(variables.storageObject.booksInStorage.value)
        );
        addBookToLibrary(book, id);
        document.location.reload();
    } else {
        variables.storageObject.booksInStorage.value = [];
        variables.storageObject.booksInStorage.value.push(book);
        variables.localStorage.setItem(
            'Books', 
            JSON.stringify(variables.storageObject.booksInStorage.value)
        );
        addBookToLibrary(book, id);
        document.location.reload();
    }
}
