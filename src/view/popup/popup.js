import {humanizeDate, capitalizeFirstLetter} from "../../utils.js";
import {createCommentsTemplate} from "./comment.js";

const createGenresTemplate = (genres) => {
  let output = ``;
  for (const genre of genres) {
    output += `<span class="film-details__genre">${capitalizeFirstLetter(genre)}</span>`;
  }
  return output;
};

export const createPopupTemplate = (filmData) => {
  const {
    title,
    originalTitle,
    rating,
    director,
    writers,
    actors,
    date,
    duration,
    country,
    genres,
    posterSrc,
    ageLimit,
    description,
    comments,
    isWatchList,
    isFavourite,
    isWatched
  } = filmData;

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
  <div class="film-details__top-container">
  <div class="film-details__close">
  <button class="film-details__close-btn" type="button">close</button>
  </div>
  <div class="film-details__info-wrap">
  <div class="film-details__poster">
  <img class="film-details__poster-img" src="${posterSrc}" alt="">

  <p class="film-details__age">${ageLimit}+</p>
  </div>

  <div class="film-details__info">
  <div class="film-details__info-head">
  <div class="film-details__title-wrap">
  <h3 class="film-details__title">${title}</h3>
  <p class="film-details__title-original">${originalTitle}</p>
  </div>

  <div class="film-details__rating">
  <p class="film-details__total-rating">${rating}</p>
  </div>
  </div>

  <table class="film-details__table">
  <tr class="film-details__row">
  <td class="film-details__term">Director</td>
  <td class="film-details__cell">${director}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Writers</td>
  <td class="film-details__cell">${writers.join(`, `)}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Actors</td>
  <td class="film-details__cell">${actors.join(`, `)}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Release Date</td>
  <td class="film-details__cell">${humanizeDate(date, `date`)}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Runtime</td>
  <td class="film-details__cell">${duration}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Country</td>
  <td class="film-details__cell">${country}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Genres</td>
  <td class="film-details__cell">${createGenresTemplate(genres)}</td>
  </tr>
  </table>

  <p class="film-details__film-description">${description}</p>
  </div>
  </div>

  <section class="film-details__controls">
  <input type="checkbox" class="film-details__control-input visually-hidden" ${isWatchList ? `checked` : ``} id="watchlist" name="watchlist">
  <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

  <input type="checkbox" class="film-details__control-input visually-hidden" ${isWatched ? `checked` : ``} id="watched" name="watched">
  <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

  <input type="checkbox" class="film-details__control-input visually-hidden" ${isFavourite ? `checked` : ``} id="favorite" name="favorite">
  <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
  </section>
  </div>

  <div class="film-details__bottom-container">
  <section class="film-details__comments-wrap">
  <h3 class="film-details__comments-title">Comments
  <span class="film-details__comments-count">${comments.length}</span>
  </h3>

  <ul class="film-details__comments-list">
  ${createCommentsTemplate(comments)}
  </ul>

  <div class="film-details__new-comment">
  <div class="film-details__add-emoji-label"></div>

  <label class="film-details__comment-label">
  <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
  </label>

  <div class="film-details__emoji-list">
  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
  <label class="film-details__emoji-label" for="emoji-smile">
  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
  </label>

  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
  <label class="film-details__emoji-label" for="emoji-sleeping">
  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
  </label>

  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
  <label class="film-details__emoji-label" for="emoji-puke">
  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
  </label>

  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
  <label class="film-details__emoji-label" for="emoji-angry">
  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
  </label>
  </div>
  </div>
  </section>
  </div>
  </form>
  </section>`;
};
