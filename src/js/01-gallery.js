// Add imports above this line
import { galleryItems } from './gallery-items';
import onCreateGalleryCards from '../modules/gallery-cards';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
// console.log(galleryItems);


const refs = {
    gallery: document.querySelector('.gallery'),
};

refs.gallery.insertAdjacentHTML('beforeend', onCreateGalleryCards(galleryItems));

const  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
