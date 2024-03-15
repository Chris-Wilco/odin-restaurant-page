import "./styles.css";

const documentBody = document.querySelector("body");
const tempNameList = ["Home", "Menu", "About"];
const tempTextContentList = [
    "I motsetning til hva mange tror, er ikke Lorem Ipsum bare tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr., hvilket gjør det over 2000 år gammelt. Richard McClintock - professor i latin ved Hampden-Sydney College i Virginia, USA - slo opp flere av de mer obskure latinske ordene, consectetur, fra en del av Lorem Ipsum, og fant dets utvilsomme opprinnelse gjennom å studere bruken av disse ordene i klassisk litteratur. Lorem Ipsum kommer fra seksjon 1.10.32 og 1.10.33 i de Finibus Bonorum et Malorum (The Extremes of Good and Evil) av Cicero, skrevet i år 45 f.kr. Boken er en avhandling om teorier rundt etikk, og var veldig populær under renessansen. Den første linjen av Lorem Ipsum, Lorem Ipsum dolor sit amet..., er hentet fra en linje i seksjon 1.10.32.",
    "Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med på et eller annet vis. Det være seg innlagt humor eller tilfeldig genererte ord som ser langt fra troverdige ut. Skal man bruke avsnitt av Lorem Ipsum må man være sikker på at det ikke skjuler seg noe pinlig midt i teksten. Lorem Ipsum-generatorer på internett har en tendens til å repetere forhåndsdefinerte biter av tekst, noe som gjør dette til den første rettmessige generatoren på nett. Den bruker en samling av over 200 latinske ord, kombinert med en håndfull av setningsstrukturer, som sammen genererer Lorem Ipsum som ser fornuftig ut. Ferdiggenerert Lorem Ipsum er derfor alltid fri for repetisjon, innlagt humor, ugjenkjennlige ordformer osv.",
    "Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke Lorem Ipsum er at det har en mer eller mindre normal fordeling av bokstaver i ord, i motsetning til 'Innhold her, innhold her', og gir inntrykk av å være lesbar tekst. Mange webside- og sideombrekkingsprogrammer bruker nå Lorem Ipsum som sin standard for provisorisk tekst, og et søk etter 'Lorem Ipsum' vil avdekke mang en uferdig webside. Ulike versjoner har sprunget frem i senere år, noen ved rene uhell og andre mer planlagte (med humor o.l.).",
];

generatePage(tempNameList, tempTextContentList);

function generatePage(tabNames, textContentList) {
    const pageButtonList = createNavBar(tabNames);
    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("class", "content-container");
    generatePageTabs(
        tabNames,
        textContentList,
        pageButtonList,
        contentContainer
    );
    documentBody.appendChild(contentContainer);
}

function createNavBar(tabNames) {
    const newHeader = document.createElement("header");
    const newNavBar = document.createElement("nav");
    newHeader.setAttribute("class", "page-header");
    newNavBar.setAttribute("class", "page-nav-bar");

    const buttonList = createNavButtons(tabNames, newNavBar);

    newHeader.appendChild(newNavBar);
    documentBody.appendChild(newHeader);

    return buttonList;
}

function createNavButtons(tabNames, navBar) {
    const navButtonReturnList = [];

    for (let i = 0; i < tabNames.length; i++) {
        const newTabButton = document.createElement("button");
        newTabButton.setAttribute("class", "nav-button");
        newTabButton.textContent = `${tabNames[i]}`;
        navBar.appendChild(newTabButton);
        navButtonReturnList.push(newTabButton);
    }
    return navButtonReturnList;
}

function generatePageTabs(
    tabNameList,
    textContentList,
    buttonList,
    contentContainer
) {
    const pageTabElements = [];

    for (let i = 0; i < tabNameList.length; i++) {
        const newPageTab = createPageTab(tabNameList[i], textContentList[i]);
        stapleTabToFunction(buttonList[i], newPageTab, contentContainer);
        pageTabElements.push(newPageTab);
    }

    return pageTabElements;
}

function createPageTab(headerName, textContent) {
    const thisPage = document.createElement("div");
    thisPage.setAttribute("class", "content-tab");

    createPageElement("content-header", "div", headerName, thisPage);
    createPageElement("content-body", "div", textContent, thisPage);

    return thisPage;
}

function createPageElement(
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

function stapleTabToFunction(buttonElement, displayElement, contentContainer) {
    buttonElement.addEventListener("click", (e) => {
        tabButtonFunction(displayElement, contentContainer);
    });
}

function tabButtonFunction(displayElement, contentContainer) {
    clearContentArea(contentContainer);
    contentContainer.appendChild(displayElement);
}

function clearContentArea(contentContainer) {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }
}
