export const asArray = ({ shows }) => (
    Object.keys(shows).map(key => shows[key])
);

export const asMoviesArray = ({ movies }) => (
    Object.keys(movies).map(key => movies[key])
);

export const selectShow = ({ shows }, showId) => {
    return shows[showId];
};