export const addFriend = id => {
    return $.ajax({
        url: '/api/friends',
        method: 'POST',
        data: { id }
    });
}

export const removeFriend = id => {
    return $.ajax({
        url: `/api/friends/${id}`,
        method: 'DELETE'
    });
}