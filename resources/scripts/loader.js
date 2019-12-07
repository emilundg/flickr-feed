function displayLoader() {
    const loaderElement = document.createElement("img");
    loaderElement.src = 'https://raw.githubusercontent.com/emilundg/flickr-feed/master/resources/images/loader.gif';
    loaderElement.id = 'loader';
    loaderElement.classList.add('center')
    document.getElementById('loaderContainer').appendChild(loaderElement);
}

function removeLoader() {
    const loaderElement = document.getElementById('loader');
    loaderElement.remove();
}