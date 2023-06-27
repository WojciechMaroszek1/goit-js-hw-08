// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector("ul.gallery");
const galleryImages = galleryItems
    .map(image =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
            </a>
        </li>`)
    .join("");
gallery.insertAdjacentHTML("beforeend", galleryImages);
console.log(gallery);

gallery.addEventListener("click", element => {
    element.preventDefault();
    if (element.target.nodeName !== "IMG") return; }); 


let lightboxGallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});

console.log(galleryItems);
