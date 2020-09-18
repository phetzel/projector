export const asArray = ({ shows }) => (
    Object.keys(shows).map(key => shows[key])
);

export const asMoviesArray = ({ movies }) => (
    Object.keys(movies).map(key => movies[key])
);

<<<<<<< HEAD
export const asUsersSearchArray = (state) => {
    const { entities, session } = state;
    const others = Object.keys(entities.users).map(key => entities.users[key]);

    return others.filter(user => user.id != session.id);;
};

=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
export const selectShow = ({ shows }, showId) => {
    return shows[showId];
};