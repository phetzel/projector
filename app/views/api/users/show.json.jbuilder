json.partial! "api/users/user", user: @user

json.shows do 
    json.array! @user.shows do |show|
        json.partial! 'api/shows/showing', show: show
    end 
end