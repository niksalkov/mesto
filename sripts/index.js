const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__main-container');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

function openPopup() {
    popup.classList.add ('popup_opened');
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}

function closePopup() {
    popup.classList.remove ('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.innerHTML = nameInput.value;
    profileJob.innerHTML = jobInput.value;
    closePopup();
  }

  
    popupOpenButton.addEventListener('click', openPopup);
    popupCloseButton.addEventListener('click', closePopup);
  formElement.addEventListener('submit', formSubmitHandler); 
