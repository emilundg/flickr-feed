// Defined globally in order for other files to access galleryContainer.
const galleryContainer = document.getElementById('galleryContainer');

// Set the gallery to something nice as the page loaded. 
document.addEventListener("DOMContentLoaded", function () {
    fetchGallery('gothenburg');
});

// This is needed in order for searched user tags.
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchedValue = document
        .getElementById('searchInput')
        .value;

    fetchGallery(searchedValue);
})

function fetchGallery(searchParam) {
    // See ./loader.js for reference.
    displayLoader();

    // See ./image-handling.js for reference.
    clearPreviousImages();

    // Fetched images is from API flickr-api.js.
    let fetchedImages = fetchImages(searchParam);
    fetchedImages.then(function (images) {

        // See ./loader.js for reference.
        removeLoader();
        if (images.length > 0) {
            this.displayImages(images);
        } else {
            this.displayEmpty();
        }
    })
}

// Needed in order to give feedback if the api call comes back with zero images.
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