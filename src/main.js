import {createProfileNameTemplate} from "./view/profile-name.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createFilmsTemplate} from "./view/films.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {openPopup as onClickOpenPopup} from "./popup.js";
import {render} from "./utils.js";
import {filmsData, filtersData} from "./data.js";

const FILM_LISTS_QUANTITY = 3;
const MAIN_FILM_LIST_LENGTH = 5;
const EXTRA_FILM_LIST_LENGTH = 2;

const bodyElement = document.querySelector(`body`);
const siteHeaderElement = bodyElement.querySelector(`.header`);
const siteMainElement = bodyElement.querySelector(`.main`);


render(siteHeaderElement, createProfileNameTemplate(), `beforeend`);
render(siteMainElement, createNavigationTemplate(filtersData), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const filmsElement = siteMainElement.querySelector(`.films`);


const renderCards = (container, filmsDataArray, quantity, begin = 0) => {
  filmsData
    .slice(begin, quantity + begin)
    .forEach((film) => render(container, createFilmCardTemplate(film), `beforeend`));
};


for (let i = 1; i <= FILM_LISTS_QUANTITY; i++) {
  render(filmsElement, createFilmListTemplate(), `afterbegin`);
  let filmListElement = filmsElement.querySelector(`.films-list`);
  let filmListContainerElement = filmListElement.querySelector(`.films-list__container`);

  if (i === FILM_LISTS_QUANTITY) {
    renderCards(filmListContainerElement, filmsData, MAIN_FILM_LIST_LENGTH);
    if (filmsData.length > MAIN_FILM_LIST_LENGTH) {
      render(filmListElement, createShowMoreButtonTemplate(), `beforeend`);
      const showMoreButton = filmListElement.querySelector(`.films-list__show-more`);

      let onClickShowMore = (evt) => {
        evt.preventDefault();
        let renderedFilmsCount = filmListContainerElement.querySelectorAll(`.film-card`).length;
        renderCards(filmListContainerElement, filmsData, MAIN_FILM_LIST_LENGTH, renderedFilmsCount);
        renderedFilmsCount += MAIN_FILM_LIST_LENGTH;
        if (renderedFilmsCount >= filmsData.length) {
          showMoreButton.remove();
          showMoreButton.removeEventListener(`click`, onClickShowMore);
        }
      };

      showMoreButton.addEventListener(`click`, onClickShowMore);
    }
  } else {
    filmListElement.classList.add(`films-list--extra`);
    let filmListTitle = filmListElement.querySelector(`.films-list__title`);
    filmListTitle.classList.remove(`visually-hidden`);
    renderCards(filmListContainerElement, filmsData, EXTRA_FILM_LIST_LENGTH);
  }
}


filmsElement.addEventListener(`click`, onClickOpenPopup);
