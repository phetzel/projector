json.extract! user, :id, :email
json.shows do 
    user.shows.each do |show|
        json.extract! show, :id, :time, :date
    end 
end