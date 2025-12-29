const photos = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg"
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
