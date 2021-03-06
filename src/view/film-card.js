const DESCRIPTION_MAX_LENGTH = 139;

import {humanizeDate, capitalizeFirstLetter} from "../utils.js";

export const createFilmCardTemplate = (filmData) => {
  const {
    title,
    rating,
    date,
    duration,
    genres,
    posterSrc,
    description,
    comments,
    isWatchList,
    isFavourite,
    isWatched
  } = filmData;

  const descriptonTemplate = (description.length <= DESCRIPTION_MAX_LENGTH)
    ? description
    : description.slice(0, DESCRIPTION_MAX_LENGTH) + `...`;

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
  <span class="film-card__year">${humanizeDate(date, `year`)}</span>
  <span class="film-card__duration">${duration}</span>
  <span class="film-card__genre">${capitalizeFirstLetter(genres[0])}</span>
  </p>
  <img src="${posterSrc}" alt="" class="film-card__poster">
  <p class="film-card__description">${descriptonTemplate}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <div class="film-card__controls">
  <button class="film-card__controls-item ${isWatchList ? `film-card__controls-item--active` : ``} button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
  <button class="film-card__controls-item ${isWatched ? `film-card__controls-item--active` : ``} button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
  <button class="film-card__controls-item ${isFavourite ? `film-card__controls-item--active` : ``} button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
  </article>`;
};
