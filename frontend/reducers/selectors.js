export const asArray = ({ shows }) => (
    Object.keys(shows).map(key => shows[key])
);