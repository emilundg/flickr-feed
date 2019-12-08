var modalElement = document.getElementById('galleryModal');

function openModal(imageSource) {
    var copiedImageElement = copyImageElement(imageSource);

    modalElement.appendChild(copiedImageElement);

    var windowPositionY = getYScrollPosition();
    modalElement.style.top = windowPositionY + 'px';

    enableClose();
    disableScroll();

    modalElement.style.visibility = 'visible';

}

function copyImageElement(imageSource) {
    var copiedImageElement = document.createElement("div");

    copiedImageElement.setAttribute("style", "background-image: url(" + imageSource + ");");

    copiedImageElement
        .classList
        .add('gallery__image')

    return copiedImageElement;
}

function getYScrollPosition() {
    return window.scrollY;
}

function enableClose() {
    document.addEventListener('keyup', enableKeyboardClose);

    modalElement.addEventListener('click', function () {
        closeModal();
    })
}

function enableKeyboardClose() {
    var event = window.event;
    if (event.keyCode === 27) {
        closeModal();
    }
}

// This function is needed in order for the page to not still listen for keyup
// event.
function disableKeyboardClose() {
    document.removeEventListener('keyup', enableKeyboardClose);
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'visible';
}

function closeModal() {
    disableKeyboardClose();
    enableScroll();

    if (modalElement.firstChild) {
        modalElement.removeChild(modalElement.firstChild);
    }

    modalElement.style.visibility = 'hidden';
}