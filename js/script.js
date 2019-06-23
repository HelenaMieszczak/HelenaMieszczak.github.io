function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";

}
// changeBackground()
let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=3O4uYyLeThJVuTOG0NEGlAaKvzqu7zkghjyF4dTK';

function getPicture() {
    fetch(dataURL)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        changeBackground(data.hdurl);
    });
}
getPicture()

let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3O4uYyLeThJVuTOG0NEGlAaKvzqu7zkghjyF4dTK";

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
            createGallery(pictureList);
        });
}

getMarsPicture()

let gallery = document.getElementById('content');

function createGallery(datalist) {
    for(let i = 1; i < 9; i++) {
        let img = document.createElement("img");
        let imgPath = datalist[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);

    }

}
// createGallery(datalist)