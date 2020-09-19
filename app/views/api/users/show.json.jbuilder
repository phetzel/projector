json.partial! "api/users/user", user: @user

json.friends do 
    json.array! @user.companions do |friend|
        json.partial! 'api/users/user', user: friend
    end 
end