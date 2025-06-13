// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const options = {
    overlay: true,
    nav: true,
    captionsData: 'alt',
    captionDelay: 250,
}
const lightbox = new SimpleLightbox('.gallery a', options);

function createGallery(images) {
    gallery.innerHTML = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `<li class="gallery-card">
        <a href=${largeImageURL}>
        <img class="card-photo"src=${webformatURL} alt="${tags}"/>
        </a>
        <ul class="card-list">
        <li><h3>Likes</h3><p>${likes}</p></li>
        <li><h3>Views</h3><p>${views}</p></li>
        <li><h3>Comments</h3><p>${comments}</p></li>
        <li><h3>Downloads</h3><p>${downloads}</p></li>
        </ul>
        </li>`;
    }).join("");
    lightbox.refresh();
};
function clearGallery() {
    gallery.innerHTML = "";
};
function showLoader() {
    loader.classList.remove("hidden");
};
function hideLoader() {
    loader.classList.add("hidden");
}


export { createGallery, clearGallery, showLoader, hideLoader};