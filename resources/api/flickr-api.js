async function fetchImages(tag) {
    let searchApiURL = buildUrl(tag);

    let imagesURL = [];
    try {
        await axios
            .get(searchApiURL)
            .then(function (response) {
                const responseData = response.data;
                const photos = responseData.photos.photo;
                photos.forEach(image => {
                    let imageURL = this.imageURLBuilder(image);
                    imagesURL.push(imageURL)
                })
            })
    } catch (error) {
        console.log(error);
    };

    return imagesURL;
}

function buildUrl(searchedTag) {
    const completeUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d22802' +
            'aa39df5256ae0c31881d8a733f&tags=' + searchedTag + '&per_page=50&page=&format=json&nojsoncallback=1';

    return completeUrl;
}