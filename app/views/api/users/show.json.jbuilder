json.partial! "api/users/user", user: @user

<<<<<<< HEAD
json.friends do 
    json.array! @user.companions do |friend|
        json.partial! 'api/users/user', user: friend
=======
json.shows do 
    json.array! @user.shows do |show|
        json.partial! 'api/shows/showing', show: show
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
    end 
end