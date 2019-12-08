// This is needed in order to not store previous search results.
function clearPreviousImages() {
    while (galleryContainer.firstChild) {
        galleryContainer.removeChild(galleryContainer.firstChild);
    }
}

// This is needed in order to construct the correct image URL.
function imageURLBuilder(imageObject) {
    const imageFarm = imageObject.farm;
    const imageServer = imageObject.server;
    const imageID = imageObject.id;
    const imageSecret = imageObject.secret;

    const imagePath = 'https://farm' + imageFarm + '.staticflickr.com/' + imageServer + '/' + imageID + '_' + imageSecret + '.jpg';
    return imagePath;
}

function displayImages(images) {
    const galleryClasses = galleryContainer.classList;
    const errorClass = "error-message__no-result";
    if (galleryClasses.contains(errorClass)) {
        galleryClasses.remove(errorClass);
    }
    images.forEach(imageSource => {
        const imageElement = this.createImageElement(imageSource);
        galleryContainer.appendChild(imageElement);
    })
}

function createImageElement(imageSource) {
    const imageElement = document.createElement("div");

    // This is needed in order to add unique image source to a div.
    imageElement.setAttribute("style", "background-image: url(" + imageSource + ");");

    imageElement
        .classList
        .add('gallery__image')

    imageElement.addEventListener('click', function () {
        openModal(imageSource);
    });
    return imageElement;
}
