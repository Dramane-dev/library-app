import { Book } from '../../main.js';
import { addBookToLibrary } from './addBookToLibrary.js';

export function getFormValues(fields, id) {
    const book = new Book(
        fields.bookTitle.value,
        fields.bookAuthor.value,
        fields.bookPages.value,
        fields.bookRead.checked
    );

    addBookToLibrary(book, id);
}
