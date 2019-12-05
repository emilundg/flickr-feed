const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fetchedImages = fetchImages();
    fetchedImages.then(function (images) {
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
        document.getElementById('container').appendChild(imageElement);
    })
}

function createImageElement(imageSource) {
    const imageElement = document.createElement("img");
    imageElement.src = imageSource;
    return imageElement;
}