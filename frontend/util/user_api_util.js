export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
);

export const fetchUsers = data => (
    $.ajax({
        method: 'GET',
        url: `api/users`,
        data
    })
);

export const updateUser = (formData, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
);