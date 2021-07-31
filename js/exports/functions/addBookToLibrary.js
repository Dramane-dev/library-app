import * as variables from '../variables.js';
import * as htmlWords from '../htmlWords.js';
import { createElement } from './createElement.js';
import { addChildren } from './addChildren.js';

export function addBookToLibrary(book, id) {
    let container = variables.booksContainer;
    let childrens = [];
    let words = htmlWords.default.htmlWords;
    let bookCard = document.createElement('div');
    let removeBookCard = document.createElement('div');
    let removeParagraph = document.createElement('p');

    bookCard.className = 'book-card';
    bookCard.setAttribute('data-id', id);

    removeBookCard.id = 'delete-book';
    removeBookCard.className = 'delete-book';

    removeParagraph.id = 'delete-book-btn';
    removeParagraph.textContent = 'X'

    removeBookCard.appendChild(removeParagraph);

    removeBookCard.addEventListener('click', () => {
        variables.booksContainer.removeChild(removeBookCard.parentNode);
    });

    bookCard.appendChild(removeBookCard);

    variables.myLibrary.push(book);

    childrens = [
        createElement(words.Title, 'h1'),
        createElement(book.title, 'p'),
        createElement(words.Author, 'h1'),
        createElement(book.author, 'p'),
        createElement(words.Pages, 'h1'),
        createElement(book.pages, 'p'),
        createElement(words.Read, 'h1'),
        createElement(book.read, 'p')
    ];

    addChildren(bookCard, childrens);
    container.appendChild(bookCard);

    variables.noBookMsg.style.display = 'none';
}