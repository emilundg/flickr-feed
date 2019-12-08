async function fetchImages(tag) {
    var searchApiURL = buildUrl(tag);

    var imagesURL = [];
    try {
        var response = await fetch(searchApiURL);
        var responseData = await response.json();
        var photos = responseData.photos.photo;
        photos.forEach(function (image) {
            var imageURL = this.imageURLBuilder(image);
            imagesURL.push(imageURL)
        })
    } catch (error) {
        console.log(error);
    };

    return imagesURL;
}

function buildUrl(searchedTag) {
    var completeUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d22802' +
            'aa39df5256ae0c31881d8a733f&tags=' + searchedTag + '&per_page=25&page=&format=json&nojsoncallback=1';

    return completeUrl;
}