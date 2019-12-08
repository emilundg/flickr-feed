var galleryContainer = document.getElementById('galleryContainer');

var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    displayLoader();

    clearPreviousImages();

    var searchedValue = document
        .getElementById('searchInput')
        .value;

    // Fetched images is from API flickr-api.js.
    var fetchedImages = fetchImages(searchedValue);
    fetchedImages.then(function (images) {
        removeLoader();
        if (images.length > 0) {
            this.displayImages(images);
        } else {
            this.displayEmpty();
        }
    })
})

function displayEmpty() {
    var noResultText = document.createElement("h2");
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