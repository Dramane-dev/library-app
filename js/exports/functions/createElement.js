let createElement = (content, htmlElement) => {
    let element = document.createElement(htmlElement);
    element.innerText = content;
    return element;
};

export {
    createElement
};