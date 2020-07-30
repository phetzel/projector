export const fetchShows = data => (
    $.ajax({
        method: 'GET',
        url: 'api/shows',
        data
    })
);

export const fetchShow = id => (
    $.ajax({
        method: 'GET',
        url: `api/shows/${id}`
    })  
)

export const createShow = show => (
    $.ajax({
        method: 'POST',
        url: `api/shows`,
        data: {show}
    })    
)