const filmToFilterMap = {
  watchlist: (films) => films.filter((film) => film.isWatchlist).length,
  favourites: (films) => films.filter((film) => film.isFavourite).length,
  history: (films) => films.filter((film) => film.isWatched).length
};

export const generateFilterData = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};

