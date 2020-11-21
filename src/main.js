import {createProfileNameTemplate} from "./view/profile-name.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createFilmsTemplate} from "./view/films.js";
import {createFilterTemplate} from "./view/filter.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createPopupTemplate} from "./view/popup.js";

const FILM_LISTS_QUANTITY = 3;
const MAIN_FILM_LIST_LENGTH = 5;
const EXTRA_FILM_LIST_LENGTH = 2;

const bodyElement = document.querySelector(`body`);
const siteHeaderElement = bodyElement.querySelector(`.header`);
const siteMainElement = bodyElement.querySelector(`.main`);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderCards = (cardsQuantity, container) => {
  for (let i = 0; i < cardsQuantity; i++) {
    render(container, createFilmCardTemplate(), `beforeend`);
  }
};


render(siteHeaderElement, createProfileNameTemplate(), `beforeend`);
render(siteMainElement, createNavigationTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const filmsElement = siteMainElement.querySelector(`.films`);

for (let i = 1; i <= FILM_LISTS_QUANTITY; i++) {
  render(filmsElement, createFilmListTemplate(), `afterbegin`);
  let filmListElement = filmsElement.querySelector(`.films-list`);
  let filmListContainerElement = filmListElement.querySelector(`.films-list__container`);
  if (i === FILM_LISTS_QUANTITY) {
    renderCards(MAIN_FILM_LIST_LENGTH, filmListContainerElement);
    render(filmListElement, createShowMoreButtonTemplate(), `beforeend`);
  } else {
    filmListElement.classList.add(`films-list--extra`);
    let filmListTitle = filmListElement.querySelector(`.films-list__title`);
    filmListTitle.classList.remove(`visually-hidden`);
    renderCards(EXTRA_FILM_LIST_LENGTH, filmListContainerElement);
  }
}

render(bodyElement, createPopupTemplate(), `beforeend`);
