let addChildren = (parent, childrens) => {
    childrens.forEach(child => {
        parent.appendChild(child);
    });
};

export {
    addChildren
};