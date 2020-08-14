export const followShow = id => {
    return $.ajax({
        url: '/api/follows',
        method: 'POST',
        data: { id }
    });
}

export const unfollowShow = id => {
    return $.ajax({
        url: `/api/follows/${id}`,
        method: 'DELETE'
    });
}