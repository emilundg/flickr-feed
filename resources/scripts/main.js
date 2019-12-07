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
        this.displayImages(images);
    })
})

// This is needed in order to not store previous search results.
function clearPreviousImages() {
    let containerFirstChild = galleryContainer.firstChild;
    while (containerFirstChild) {
        galleryContainer.removeChild(containerFirstChild);
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
    images.forEach(imageSource => {
        const imageElement = this.createImageElement(imageSource);
        galleryContainer.appendChild(imageElement);
    })
}

function createImageElement(imageSource) {
    const imageElement = document.createElement("div");
    // imageElement.src = imageSource; This is needed in order to add unique image
    // source to a div.
    imageElement.setAttribute("style", "background-image: url(" + imageSource + ");");

    imageElement
        .classList
        .add('gallery__image')

    return imageElement;
}