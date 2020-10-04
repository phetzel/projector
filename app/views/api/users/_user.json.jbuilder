json.extract! user, :id, :email
json.photoUrl url_for(user.photo) if user.photo.attached?

json.shows do 
    json.array! user.shows do |show|
        json.partial! 'api/shows/showing.json.jbuilder', show: show
    end 
end

