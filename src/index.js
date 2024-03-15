/* const contentContainer = document.getElementById("content"); */
const documentBody = document.querySelector("body");
const tempNameList = ["Page Name 1", "Page Name 2", "Page Name 3"];
const tempTextContentList = [
    "I motsetning til hva mange tror, er ikke Lorem Ipsum bare tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr., hvilket gjør det over 2000 år gammelt. Richard McClintock - professor i latin ved Hampden-Sydney College i Virginia, USA - slo opp flere av de mer obskure latinske ordene, consectetur, fra en del av Lorem Ipsum, og fant dets utvilsomme opprinnelse gjennom å studere bruken av disse ordene i klassisk litteratur. Lorem Ipsum kommer fra seksjon 1.10.32 og 1.10.33 i de Finibus Bonorum et Malorum (The Extremes of Good and Evil) av Cicero, skrevet i år 45 f.kr. Boken er en avhandling om teorier rundt etikk, og var veldig populær under renessansen. Den første linjen av Lorem Ipsum, Lorem Ipsum dolor sit amet..., er hentet fra en linje i seksjon 1.10.32.",
    "Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med på et eller annet vis. Det være seg innlagt humor eller tilfeldig genererte ord som ser langt fra troverdige ut. Skal man bruke avsnitt av Lorem Ipsum må man være sikker på at det ikke skjuler seg noe pinlig midt i teksten. Lorem Ipsum-generatorer på internett har en tendens til å repetere forhåndsdefinerte biter av tekst, noe som gjør dette til den første rettmessige generatoren på nett. Den bruker en samling av over 200 latinske ord, kombinert med en håndfull av setningsstrukturer, som sammen genererer Lorem Ipsum som ser fornuftig ut. Ferdiggenerert Lorem Ipsum er derfor alltid fri for repetisjon, innlagt humor, ugjenkjennlige ordformer osv.",
    "Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke Lorem Ipsum er at det har en mer eller mindre normal fordeling av bokstaver i ord, i motsetning til 'Innhold her, innhold her', og gir inntrykk av å være lesbar tekst. Mange webside- og sideombrekkingsprogrammer bruker nå Lorem Ipsum som sin standard for provisorisk tekst, og et søk etter 'Lorem Ipsum' vil avdekke mang en uferdig webside. Ulike versjoner har sprunget frem i senere år, noen ved rene uhell og andre mer planlagte (med humor o.l.).",
];

generatePage(tabNameList, textContentList);

function generatePage(tabNameList, textContentList) {
    const pageButtonElements = generateNavButtons(tabNameList);

    const pageContentElement = document.createElement("div");
    newTabButton.setAttribute("class", `page-content-container`);
    generatePageTabs(
        tabNameList,
        textContentList,
        pageButtonElements,
        pageContentElement
    );

    documentBody.appendChild(pageContentElement);
}

//Generate nav bar and unlinked buttons
//Returns a list of button elements now attached to the document body within the nav bar
function generateNavButtons(pageTabNameList) {
    const pageHeader = document.createElement("header");
    const pageNavBar = document.createElement("nav");
    pageHeader.setAttribute("class", `page-header`);
    pageNavBar.setAttribute("class", `page-nav-bar`);

    const navButtonReturnList = [];

    for (let i = 0; i < pageTabNameList; i++) {
        const newTabButton = document.createElement("button");
        newTabButton.setAttribute("class", `page-nav-button`);
        newTabButton.textContent = pageTabNameList[i];
        pageNavBar.appendChild(newTabButton);
        navButtonReturnList.push(newTabButton);
    }

    pageHeader.appendChild(pageNavBar);
    //TOD: Do I have to generate the page header separately?
    documentBody.appendChild(pageHeader);

    return navButtonReturnList;
}

function generatePageTabs(
    pageTabNameList,
    pageTextContentList,
    pageButtonElementList,
    pageContentContainer
) {
    const pageTabElements = [];

    for (let i = 0; i < pageTabNameList.length; i++) {
        const newPageTab = createPageTab(
            pageTabNameList[i],
            pageTextContentList[i]
        );

        stapleTabToFunction(pageButtonElementList[i], newPageTab);
        pageContentContainer.appendChild(newPageTab);
        pageTabElements.push(newPageTab);
    }

    return pageTabElements;
}

function createPageTab(pageHeaderName, pageTextContent) {
    const thisPage = createElement("page-tab", div);

    const pageHeader = createPageElement(
        "page-header",
        div,
        pageHeaderName,
        thisPage
    );
    const pageContent = createPageElement(
        "page-content",
        div,
        pageTextContent,
        thisPage
    );

    return thisPage;
}

function createPageElement(
    elementClass,
    elementType,
    elementTextContent = "*",
    elementParent = "*"
) {
    const newElement = document.createElement(`${elementType}`);
    newElement.setAttribute("class", `${elementClass}`);

    if (elementTextContent != "*") {
        newElement.textContent = elementTextContent;
    }

    if (elementParent != "*") {
        elementParent.appendChild(newElement);
    }
    return newElement;
}

function stapleTabToFunction(tabButtonElement, displayElement) {
    tabButtonElement.addEventListener("click", (e) => {
        tabButtonFunction(displayElement);
    });
}

function tabButtonFunction(displayElement) {
    //TODO: I suppose hide all other display elements in favor of the one input to this function
    //Toggle visibility?
}
