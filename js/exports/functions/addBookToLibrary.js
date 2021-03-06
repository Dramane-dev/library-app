import * as variables from '../variables.js';
import * as htmlWords from '../htmlWords.js';
import * as mainVariables from '../../main.js';
import { createElement } from './createElement.js';
import { addChildren } from './addChildren.js';
import { hideAllBooks } from './hideAllBooks.js';
import { displayEditForm } from './displayEditForm.js';

export function addBookToLibrary(book, id) {
    let container = variables.booksContainer;
    let childrens = [];
    let words = htmlWords.default.htmlWords;
    let bookCard = document.createElement('div');
    let btnsContainer = document.createElement('div');
    let editBook = document.createElement('div');
    let editBtn = document.createElement('span');
    let removeBookCard = document.createElement('div');
    let removeParagraph = document.createElement('span');

    bookCard.className = 'book-card';
    bookCard.setAttribute('data-id', id);

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

    editBook.addEventListener('click', () => {
        let actualBook = variables.storageObject.booksInStorage.value.filter(
            book => book.title === editBook.parentNode.parentNode.querySelector('p').textContent
        );
        hideAllBooks();
        displayEditForm(actualBook);

        mainVariables.actualEditBtn.btn = editBook;
    });

    removeBookCard.addEventListener('click', () => {
        variables.booksContainer.removeChild(removeBookCard.parentNode.parentNode);
    });

    bookCard.appendChild(btnsContainer);

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