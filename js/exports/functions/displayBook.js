import * as variables from '../variables.js';
import * as htmlWords from '../htmlWords.js';
import { createElement } from './createElement.js';
import { addChildren } from './addChildren.js';

export function displayBook(books) {
    let container = variables.booksContainer;
    let childrens = [];
    let words = htmlWords.default.htmlWords;

    for (let i = 0; i < books.length; i++) {
        let bookCard = document.createElement('div');
        let btnsContainer = document.createElement('div');
        let editBook = document.createElement('div');
        let editBtn = document.createElement('span');
        let removeBookCard = document.createElement('div');
        let removeParagraph = document.createElement('span');

        bookCard.id = 'book-card';
        bookCard.className = 'book-card';
        bookCard.setAttribute('data-id', i);

        btnsContainer.className = 'btns-container'

        editBook.id = 'edit-book';
        editBook.className = 'edit-book';
        editBtn.className = 'material-icons';
        editBtn.textContent = 'edit';

        removeBookCard.id = 'delete-book';
        removeBookCard.className = 'delete-book';

        removeParagraph.id = 'delete-book-btn';
        removeParagraph.textContent = 'X'

        editBook.appendChild(editBtn);
        removeBookCard.appendChild(removeParagraph);

        btnsContainer.appendChild(removeBookCard);
        btnsContainer.appendChild(editBook);

        bookCard.appendChild(btnsContainer);

        childrens = [
            createElement(words.Title, 'h1'),
            createElement(books[i].title, 'p'),
            createElement(words.Author, 'h1'),
            createElement(books[i].author, 'p'),
            createElement(words.Pages, 'h1'),
            createElement(books[i].pages, 'p'),
            createElement(words.Read, 'h1'),
            createElement(books[i].read, 'p')
        ];
        
        addChildren(bookCard, childrens);

        container.appendChild(bookCard);
    }
}