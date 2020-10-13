function checkURL() {
    if (window.location.href == 'https://www.interest.co.nz/') {
        return false;
    } else {
        return true;
    }
}

function removeElementById(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function removeElementByClass() {
    var classElem = getElementByXpath("/html/body");
    classElem.style.overflow = "scroll";

}


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


function removeElem() {
    if (checkURL()) {
        removeElementById('pp-ablock-banner-wrapper');
        removeElementById('block-press-patron-presspatron-ablock-banner')
        removeElementByClass();

    }
}

removeElem();