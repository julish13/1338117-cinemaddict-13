import {humanizeDate} from "../../utils.js";

export const createCommentsTemplate = (comments) => {
  let output = ``;
  for (const comment of comments) {
    const {text, emotion, author, date} = comment;
    output += `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
    </span>
    <div>
    <p class="film-details__comment-text">${text}</p>
    <p class="film-details__comment-info">
    <span class="film-details__comment-author">${author}</span>
    <span class="film-details__comment-day">${humanizeDate(date)}</span>
    <button class="film-details__comment-delete">Delete</button>
    </p>
    </div>
    </li>`;
  }
  return output;
};
