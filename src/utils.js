import dayjs from "dayjs";

export const humanizeDate = (date, format) => {
  switch (format) {
    case `year`:
      return dayjs(date).format(`YYYY`);
    case `date`:
      return dayjs(date).format(`DD MMMM YYYY`);
    default:
      return dayjs(date).format(`YYYY/MM/DD hh:mm`);
  }
};

export const getRandomInteger = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
