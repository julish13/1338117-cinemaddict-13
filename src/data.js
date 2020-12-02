import {generateFilmData} from "./mock/film-card.js";
import {generateFilterData} from "./mock/filter.js";

const FILMS_QUANTITY = 20;

export const filmsData = new Array(FILMS_QUANTITY).fill().map(generateFilmData);
export const filtersData = generateFilterData(filmsData);
