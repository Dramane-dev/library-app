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
        bookCard.className = 'book-card';

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