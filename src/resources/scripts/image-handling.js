// This is needed in order to not store previous search results.
function clearPreviousImages() {
    while (galleryContainer.firstChild) {
        galleryContainer.removeChild(galleryContainer.firstChild);
    }
}

// This is needed in order to construct the correct image URL.
function imageURLBuilder(imageObject) {
    var imageFarm = imageObject.farm;
    var imageServer = imageObject.server;
    var imageID = imageObject.id;
    var imageSecret = imageObject.secret;

    var imagePath = 'https://farm' + imageFarm + '.staticflickr.com/' + imageServer + '/' + imageID + '_' + imageSecret + '.jpg';
    return imagePath;
}

function displayImages(images) {
    var galleryClasses = galleryContainer.classList;
    var errorClass = "error-message__no-result";
    if (galleryClasses.contains(errorClass)) {
        galleryClasses.remove(errorClass);
    }
    images.forEach(function(imageSource) {
        var imageElement = this.createImageElement(imageSource);
        galleryContainer.appendChild(imageElement);
    })
}

function createImageElement(imageSource) {
    var imageElement = document.createElement("div");

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
