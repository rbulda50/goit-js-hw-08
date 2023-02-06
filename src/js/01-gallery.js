// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
// console.log(galleryItems);



const refs = {
    gallery: document.querySelector('.gallery'),
};

refs.gallery.insertAdjacentHTML('beforeend', onCreateGalleryCards(galleryItems));

function onCreateGalleryCards(images) {
    return images.map(({preview, original, description}) => {
        return`
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
            </a>
        `
    })
        .join('');
};

const  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
