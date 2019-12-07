const modalElement = document.getElementById('galleryModal');

function openModal(imageSource) {
    const copiedImageElement = copyImageElement(imageSource);

    modalElement.appendChild(copiedImageElement);

    const windowPositionY = getYScrollPosition();
    modalElement.style.top = windowPositionY + 'px';
    modalElement.style.visibility = 'visible';

    enableClose();
}

function copyImageElement(imageSource) {
    const copiedImageElement = document.createElement("div");

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
}

function enableKeyboardClose() {
    const event = window.event;
    if (event.keyCode === 27) {
        closeModal();
    }
}

function disableKeyboardClose() {
    document.removeEventListener('keyup', enableKeyboardClose);
}

function closeModal() {
    disableKeyboardClose();
    modalElement.removeChild(modalElement.firstChild);
    modalElement.style.visibility = 'hidden';
}