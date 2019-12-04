const searchApiURL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d22802aa39df5256ae0c31881d8a733f&tags=cats&per_page=50&page=&format=json&nojsoncallback=1';

const form = document.querySelector('form'); 
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    axios
        .get(searchApiURL)
        .then(function (response) {
            const responseData = response.data;
            const photos = responseData.photos.photo;
            photos.forEach(image => {
                let imageURL = this.imageURLBuilder(image);
                console.log(imageURL);
            })
        })
        .catch(function (error) {
            console.log(error);
        }) 
})

function imageURLBuilder(imageObject) {
    let imageFarm = imageObject.farm;
    let imageServer = imageObject.server;
    let imageID = imageObject.id;
    let imageSecret = imageObject.secret;

    let imagePath = 'https://farm' + imageFarm + '.staticflickr.com/' + imageServer + '/' + imageID + '_' + imageSecret + '.jpg';
    return imagePath;
}