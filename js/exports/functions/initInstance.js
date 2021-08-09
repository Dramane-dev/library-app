import * as variables from '../variables.js';

let initInstance = () => {
    variables.myLibrary.map(book => variables.objectInstances.push(book));
}

export {
    initInstance
};