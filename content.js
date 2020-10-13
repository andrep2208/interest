function checkURL() {
    if (window.location.href == 'https://www.interest.co.nz/'){
        return false;
    } else {
        return true;
    }
}

function removeElementById(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}



function removeElem(){
    if(checkURL() == true){
        removeElementById('pp-ablock-banner-wrapper');
        removeElementById('block-press-patron-presspatron-ablock-banner')
        var classElem = document.getElementsByClassName("html not-front not-logged-in no-sidebars page-node page-node- page-node-107496 node-type-story");
        for (var i =0; i < classElem.length; i++ ){
            classElem[i].style.overflow = "scroll";
        }
   
    }
}

removeElem();