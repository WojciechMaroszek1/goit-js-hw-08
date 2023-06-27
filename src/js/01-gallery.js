import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import '_../node_modules/simplelightbox/dist/simple-lightbox.min.css';

const imagesGallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </div>`
  )
  .join('');
imagesGallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});