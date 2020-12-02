import {render} from "./utils.js";
import {createPopupTemplate} from "./view/popup/popup.js";
import {filmsData} from "./data.js";

const bodyElement = document.querySelector(`body`);

const closePopup = () => {
  const popupElement = bodyElement.querySelector(`.film-details`);
  popupElement.remove();
};

const onClickClosePopup = () => {
  const popupElement = bodyElement.querySelector(`.film-details`);
  const closeButton = popupElement.querySelector(`.film-details__close-btn`);
  closeButton.removeEventListener(`click`, onClickClosePopup);
  closePopup();
};

export const openPopup = (evt) => {
  const cardsCollections = bodyElement.querySelectorAll(`.film-card`);
  let popupElement = bodyElement.querySelector(`.film-details`);
  if (popupElement) {
    closePopup();
  }

  cardsCollections.forEach((card, i) => {
    const target = card.querySelector(`.film-card__poster`);
    if (evt.target === target) {
      render(bodyElement, createPopupTemplate(filmsData[i]), `beforeend`);
    }
    i++;
  });
  popupElement = document.querySelector(`.film-details`);
  if (popupElement) {
    const closeButton = popupElement.querySelector(`.film-details__close-btn`);
    closeButton.addEventListener(`click`, onClickClosePopup);
  }
};
