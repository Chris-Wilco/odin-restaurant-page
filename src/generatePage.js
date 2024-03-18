export default function createNavBar(tabNames) {
    const newHeader = document.createElement("header");
    const newNavBar = document.createElement("nav");
    newHeader.setAttribute("class", "page-header");
    newNavBar.setAttribute("class", "page-nav-bar");

    const buttonList = createNavButtons(tabNames, newNavBar);

    newHeader.appendChild(newNavBar);
    documentBody.appendChild(newHeader);

    return buttonList;
}
