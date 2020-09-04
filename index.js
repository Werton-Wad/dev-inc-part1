const $worksPhotosContainer = document.querySelector('.works__photos');
const $popupImage = document.querySelector('.popup-image');
const addPopupImage = (e) => {
    if (e.target.tagName === 'IMG') {
        $popupImage.src = e.target.dataset.url;
    }
    $('#exampleModalCenter').modal('show');
}


$worksPhotosContainer.addEventListener('click', addPopupImage);