export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
<<<<<<< HEAD
)

export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: `api/users`
    })
=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
)