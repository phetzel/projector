@shows.each do |show|
    json.set! show.id do
        json.partial! 'showing', show: show 
    end 
end