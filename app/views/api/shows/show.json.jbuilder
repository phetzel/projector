json.partial! '/api/shows/showing', show: @show
json.attending do 
    json.array! @show.follows do |follow|
        json.extract! follow, :id, :user_id 
    end 
end