function displayLoader() {
    var loaderContainer = document.getElementById('loaderContainer');

    // The check for childElement is needed in order to not have multiple spinners.
    if (loaderContainer.childElementCount === 0) {
        var loaderElement = document.createElement("img");
        loaderElement.src = 'https://raw.githubusercontent.com/emilundg/flickr-feed/master/resources/images/l' +
                'oader.gif';
        loaderElement.id = 'loader';
        loaderElement
            .classList
            .add('center')
        loaderContainer.appendChild(loaderElement);
    }
}

function removeLoader() {
    var loaderElement = document.getElementById('loader');
    if (loaderElement) {
        loaderElement.remove();
    }
}