function toggleFavorite(iconElement) {
    iconElement.classList.toggle("favorite")
}

const aboutMeContainer = document.querySelector('.aboutus-container');
const popupOverlay = document.querySelector('.popup-overlay');
const closePopup = document.querySelector('.close-popup');

aboutMeContainer.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

