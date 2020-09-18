json.extract! user, :id, :email
<<<<<<< HEAD

json.shows do 
    json.array! user.shows do |show|
        json.partial! 'api/shows/showing.json.jbuilder', show: show
    end 
end

=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
