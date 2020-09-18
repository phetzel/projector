json.extract! show, :id, :movie_id, :time, :date, :lat, :lng , :desc, :address
json.movie do 
<<<<<<< HEAD
    json.partial! 'api/movies/movie.json.jbuilder', movie: show.movie
=======
    json.partial! 'api/movies/movie', movie: show.movie
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
end




