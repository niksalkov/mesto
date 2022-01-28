let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add ('popup_opened');
}

function closePopup() {
    popup.classList.remove ('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

const formElement = document.querySelector('.popup__main-container');
const nameInput = document.querySelector('.popup__name-input');
const jobInput = document.querySelector('.popup__job-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job')



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.innerHTML = nameInput.value;
    profileJob.innerHTML = jobInput.value;
    closePopup();
  }

  formElement.addEventListener('submit', formSubmitHandler); 
