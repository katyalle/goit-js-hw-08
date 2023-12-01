// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

const lightboxModal = new SimpleLightbox(`.gallery a`,
    {
        captionsData: 'alt',
        captionDelay: 250,
    }
);