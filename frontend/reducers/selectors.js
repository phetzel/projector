export const asArray = ({ shows }) => (
    Object.keys(shows).map(key => shows[key])
);

export const selectShow = ({ shows }, showId) => {
    return shows[showId];
};