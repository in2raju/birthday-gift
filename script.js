const photos = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg"
];

let currentIndex = 0;

function showPhoto() {
    document.getElementById("photo").src = photos[currentIndex];
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto();
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto();
}
