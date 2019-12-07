const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    displayLoader();

    // Fetched images is from API flickr-api.js.
    var fetchedImages = fetchImages();
    fetchedImages.then(function (images) {
        removeLoader();
        this.displayImages(images);
    })
})

// This is needed in order to construct the correct image URL.
function imageURLBuilder(imageObject) {
    let imageFarm = imageObject.farm;
    let imageServer = imageObject.server;
    let imageID = imageObject.id;
    let imageSecret = imageObject.secret;

    let imagePath = 'https://farm' + imageFarm + '.staticflickr.com/' + imageServer + '/' + imageID + '_' + imageSecret + '.jpg';
    return imagePath;
}

function displayImages(images) {
    images.forEach(imageSource => {
        const imageElement = this.createImageElement(imageSource);
        document.getElementById('galleryContainer').appendChild(imageElement);
    })
}

function createImageElement(imageSource) {
    const imageElement = document.createElement("div");
    // imageElement.src = imageSource;
    // This is needed in order to add unique image source to a div.
    imageElement.setAttribute("style", "background-image: url(" + imageSource + ");");

    imageElement.classList.add('gallery__image')

    return imageElement;
}