import dayjs from "dayjs";
import {getRandomInteger, getRandomElement} from "../utils.js";


const textString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const textArray = textString.replace(/\./g, `..`).slice(0, -1).split(`. `);
const namesArray = [`Anton Petrov`, `John Smit`, `Mike Romanov`, `Annette Grigoryan`, `Julia Stegner`, `Helen Vachovsky`, `Stacy Bell`, `Pavel Vanin`, `Olga Morozova`, `Brad Pitt`, `Scarlette Johansonn`];
const emotionsArray = [`smile`, `sleeping`, `puke`, `angry`];
const genresArray = [`comedy`, `drama`, `thriller`, `historical`, `documentary`, `mystery`, `action`, `horror`, `romance`];
const titlesArray = [`Gisaengchung`, `No Country for Old Men`, `Burn After Reading`, `Life Is Beautiful`, `City of God`, `It's a Wonderful Life`, `Back to the Future`, `Whiplash `];
const countriesArray = [`USA`, `China`, `France`, `Germany`, `Russia`];
const ageArray = [6, 12, 14, 16, 18];


const generateDate = (maxYearsAgo) => {
  return dayjs().subtract(getRandomInteger(1, maxYearsAgo), `year`).subtract(getRandomInteger(1, 365), `day`).subtract(getRandomInteger(24), `hour`).subtract(getRandomInteger(60), `minute`);
};

const generatePosterSrc = () => {
  const postersArray = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
  return `./images/posters/` + getRandomElement(postersArray);
};

const generateNames = () => {
  let names = [];
  let i = 0;
  while (i < 3) {
    names.push(getRandomElement(namesArray));
    i++;
  }
  return names;
};

const getRating = () => {
  return (Math.random() * 10).toFixed(2);
};

const getDuration = () => {
  return `${getRandomInteger(1, 2)}h ${getRandomInteger(0, 59)}min`;
};

const generateDescription = () => {
  let description = ``;
  const descriptionLength = getRandomInteger(5);
  let i = 0;
  while (i <= descriptionLength) {
    description += ` ` + getRandomElement(textArray);
    i++;
  }

  return description;
};

const generateGenres = () => {
  let genres = [];
  let i = 0;
  let max = getRandomInteger(1, 3);
  while (i < max) {
    genres.push(getRandomElement(genresArray));
    i++;
  }
  return genres;
};

const generateComment = () => {
  return {
    text: getRandomElement(textArray),
    emotion: getRandomElement(emotionsArray),
    author: getRandomElement(namesArray),
    date: generateDate(4),
  };
};

const generateComments = () => {
  const commentsNumber = getRandomInteger(30);
  let comments = [];
  let i = 0;
  while (i < commentsNumber) {
    comments.push(generateComment());
    i++;
  }
  return comments;
};


export const generateFilmData = () => {
  const title = getRandomElement(titlesArray);
  const genres = generateGenres();
  const comments = generateComments();

  return {
    posterSrc: generatePosterSrc(),
    title,
    originalTitle: title,
    director: getRandomElement(namesArray),
    writers: generateNames(),
    actors: generateNames(),
    rating: getRating(),
    date: generateDate(50),
    duration: getDuration(),
    country: getRandomElement(countriesArray),
    genres,
    description: generateDescription(),
    comments,
    ageLimit: getRandomElement(ageArray),
    isWatchlist: Boolean(getRandomInteger()),
    isFavourite: Boolean(getRandomInteger()),
    isWatched: Boolean(getRandomInteger()),
  };
};
