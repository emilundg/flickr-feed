const galleryContainer = document.getElementById('galleryContainer');

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    displayLoader();

    clearPreviousImages();

    const searchedValue = document
        .getElementById('searchInput')
        .value;

    // Fetched images is from API flickr-api.js.
    let fetchedImages = fetchImages(searchedValue);
    fetchedImages.then(function (images) {
        removeLoader();
        if (images.length > 0) {
            this.displayImages(images);
        } else {
            this.displayEmpty();
        }
    })
})

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
    };
    images.forEach(imageSource => {
        const imageElement = this.createImageElement(imageSource);
        galleryContainer.appendChild(imageElement);
    })
}

function displayEmpty() {
    const noResultText = document.createElement("h2");
    noResultText.textContent = "No images found! Try searching for something else.";
    noResultText
        .classList
        .add("center");
    galleryContainer.appendChild(noResultText);

    // Needed in order to display the message center for screen sizes larger than
    // mobile.
    galleryContainer
        .classList
        .add("error-message__no-result");
}

function createImageElement(imageSource) {
    const imageElement = document.createElement("div");

    // This is needed in order to add unique image source to a div.
    imageElement.setAttribute("style", "background-image: url(" + imageSource + ");");

    imageElement
        .classList
        .add('gallery__image')

    return imageElement;
}