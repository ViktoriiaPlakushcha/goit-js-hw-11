import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const searchWord = event.target.elements['search-text'].value.trim().toLowerCase();
    if (!searchWord) {
        return;
    }
    showLoader();
    clearGallery();
    getImagesByQuery(searchWord)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'topRight',
                    maxWidth: 432,
                    messageSize: '16',
                    class: 'my-toast',
                });
            } else {
                createGallery(images);
            }
        })
        .catch(error => {
                iziToast.show({
                    message: error,
                    messageColor: 'white',
                    color: 'red',
                    position: 'topRight',
                });
            }
        )
        .finally(() => {
            hideLoader();
        });
    form.reset();
}




