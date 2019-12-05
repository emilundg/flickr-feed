const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fetchedImages = fetchImages();
    fetchedImages.then(function(value) {
        console.log(value)
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