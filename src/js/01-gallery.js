// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const refs = {
  ulEl: document.querySelector('.gallery'),
};
function markupGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

refs.ulEl.insertAdjacentHTML('beforeend', markupGallery(galleryItems));

refs.ulEl.addEventListener('click', onClickImg);

new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
}); //ініціалізація бібліотеки

function onClickImg(evt) {
  evt.preventDefault();
}
