json.extract! user, :id, :email

json.shows do 
    json.array! user.shows do |show|
        json.partial! 'api/shows/showing.json.jbuilder', show: show
    end 
end

