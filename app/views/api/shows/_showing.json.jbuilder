json.extract! show, :id, :movie_id, :time, :date, :lat, :lng , :desc
json.movie do 
    json.partial! 'api/movies/movie', movie: show.movie
end




