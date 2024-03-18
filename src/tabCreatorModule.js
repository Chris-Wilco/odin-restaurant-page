export default function createPageTab(headerName, textContent) {
    const thisPage = document.createElement("div");
    thisPage.setAttribute("class", "content-tab");

    createPageElement("content-header", "div", headerName, thisPage);
    createPageElement("content-body", "div", textContent, thisPage);

    return thisPage;
}

export function createPageElement(
    elementClass,
    elementType,
    textContent,
    parentElement
) {
    const newElement = document.createElement(elementType);
    newElement.setAttribute("class", elementClass);

    newElement.textContent = textContent;
    parentElement.appendChild(newElement);

    return newElement;
}
