# FlickrFeed 

This project aim is to fetch images from Flickr with their open API and display them in a responsive gallery. 

Available at https://emilundg.github.io/flickr-feed/

## Browser support
Latest versions of:
- [x] Firefox
- [x] Chrome
- [x] Edge

## Getting Started

### Prerequisites
For running the project there are no prerequisites. In order to further develop and maintain project, NPM (node package manager) is needed in order to install minify and build tools. To install packages run `npm install` in root directory.

### Installing
No installment needed. In order to open the project, open the file ./src/index.html.

## Deployment
Before deploying make sure that the project passes the Eslint configuration. This is done by running the command `grunt js-clean` and checking for errors. 

Deployment (minifaction and move to dist directory) is done by running run `grunt`.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 
* [VanillaJS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
* [Grunt](https://gruntjs.com/) - Javascript task runner 
* [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Used to minify javascript files
* [CSSmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Used to minify css files
* [Eslint](https://github.com/sindresorhus/grunt-eslint) - Used to keep the code clean. 

## Author

* **Emil Lundgren** 