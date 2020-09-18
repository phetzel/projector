# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    User.destroy_all

    User.create!(
        id: "1",
        email: "admin",
        password: "admin1"
    )
<<<<<<< HEAD

    User.create!(
        id: "2",
        email: "guy",
        password: "123456"
    )

    User.create!(
        id: "3",
        email: "otherguy",
        password: "123456"
    )

    User.create!(
        id: "4",
        email: "lastguy",
        password: "123456"
    )
=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
    
    Movie.destroy_all

    Movie.create!(
        id: "1",
        title: "Titanic",
        run_time: "1:10:00",
<<<<<<< HEAD
        genre: "Horror",
        desc: "A fun family cruise gets turned upside down by a sneaky iceburg. "
                # Titanic is the first in the legendary horror triledge, which includes 
                # Titanic 2: Electric Boogaloo, and Jaws Vs. Titanic: The Crossover Movie!
=======
        genre: "Horror"
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
    )

    Movie.create!(
        id: "2",
        title: "Air Bud",
        run_time: "2:10:00",
<<<<<<< HEAD
        genre: "Action",
        desc: " An actual real life dog disregards all youth sporting 
            regulations on his way to many sports comebacks"
    )

    Movie.create!(
        id: "3",
        title: "Ken Burns: Baseball, the Civil War, and Vietnam combo mix",
        run_time: "11:11:40",
        genre: "Documentary",
        desc: "Highlights of some of documentary pioneer Ken Burn's greatest works."
    #         For the first time ever, watch parts of all three of these works intertwined.
    #         This allows proper appreciation for the vast array of accents that Ken 
    #         puts on when he reads someones private letters.
    #         What's that? Oh just the maestro slowly zooming in on a photo. A can't miss.
    )

    Movie.create!(
        id: "4",
        title: "Funny",
        run_time: "2:11:40",
        genre: "Comedy"
=======
        genre: "Action"
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
    )
    
    Show.destroy_all

    Show.create!(
        id: "1",
<<<<<<< HEAD
        movie_id: "3",
=======
        movie_id: "1",
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
        date: "2020-9-1",
        time: "12:00:00",
        lat: "37.817980",
        lng: "-122.278220",
        address: "123 Street"
    )
    
    Show.create!(
        id: "2",
        movie_id: "1",
<<<<<<< HEAD
        date: "2020-9-2",
=======
        date: "2020-2-9",
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
        time: "12:00:00",
        lat: "37.810805",
        lng: "-122.291081",
        address: "456 Avenue"
    )

    Show.create!(
        id: "3",
        movie_id: "2",
<<<<<<< HEAD
        date: "2020-9-3",
=======
        date: "2020-3-9",
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
        time: "12:00:00",
        lat: "37.810881",
        lng: "-122.296499",
        address: "whatever"
    )
<<<<<<< HEAD

    Follow.destroy_all
    Friend.destroy_all
=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
end 