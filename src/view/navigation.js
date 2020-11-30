import {capitalizeFirstLetter} from "../utils.js";

const createFilterTemplate = (filterData) => {
  const {name, count} = filterData;
  return `<a href="#${name}" class="main-navigation__item">
  ${capitalizeFirstLetter(name)} <span class="main-navigation__item-count">${count}</span>
  </a>`;
};

export const createNavigationTemplate = (filtersData) => {
  const filtersTemplate = filtersData.map(createFilterTemplate).join(``);
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  ${filtersTemplate}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};
