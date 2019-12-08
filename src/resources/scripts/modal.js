const modalElement = document.getElementById('galleryModal');

function openModal(imageSource) {
    const copiedImageElement = copyImageElement(imageSource);

    modalElement.appendChild(copiedImageElement);

    // In order to display the modal and image in the correct position vertically.
    const windowPositionY = getYScrollPosition();
    modalElement.style.top = windowPositionY + 'px';

    enableClose();
    disableScroll();

    modalElement.style.visibility = 'visible';

}

// This is neeeded because Node.cloneNode() method moves the element and we want
// a copy of the element.
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

// Wrapper method to enable the different closing alternatives.
function enableClose() {
    document.addEventListener('keyup', enableKeyboardClose);

    modalElement.addEventListener('click', function () {
        closeModal();
    })
}

// In order to allow escape key close for modal.
function enableKeyboardClose() {
    const event = window.event;
    if (event.keyCode === 27) {
        closeModal();
    }
}

// This function is needed in order for the page to not still listen for keyup
// events after close.
function disableKeyboardClose() {
    document.removeEventListener('keyup', enableKeyboardClose);
}

// In order for the user to not scroll when the modal is displayed.
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Used when modal exits for reenabling scroll.
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