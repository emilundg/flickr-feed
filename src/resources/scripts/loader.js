function displayLoader() {
    const loaderContainer = document.getElementById('loaderContainer');

    // The check for childElement is needed in order to not have multiple spinners.
    if (loaderContainer.childElementCount === 0) {
        const loaderElement = document.createElement("img");
        loaderElement.src = 'https://raw.githubusercontent.com/emilundg/flickr-feed/master/src/resources/imag' +
                'es/loader.gif';
        loaderElement.id = 'loader';
        loaderElement
            .classList
            .add('center')
        loaderContainer.appendChild(loaderElement);
    }
}

function removeLoader() {
    const loaderElement = document.getElementById('loader');
    if (loaderElement) {
        loaderElement.remove();
    }
}