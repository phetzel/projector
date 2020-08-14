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
    
    Movie.destroy_all

    Movie.create!(
        id: "1",
        title: "Titanic",
        run_time: "1:10:00"
    )

    Movie.create!(
        id: "2",
        title: "Air Bud",
        run_time: "2:10:00"
    )
    
    Show.destroy_all

    Show.create!(
        id: "1",
        movie_id: "1",
        date: "2020-8-3",
        time: "12:00:00",
        lat: "37.817980",
        lng: "-122.278220",
        address: "whatever"
    )
    
    Show.create!(
        id: "2",
        movie_id: "1",
        date: "2020-3-8",
        time: "12:00:00",
        lat: "37.810805",
        lng: "-122.291081",
        address: "whatever"
    )

    Show.create!(
        id: "3",
        movie_id: "2",
        date: "2020-8-8",
        time: "12:00:00",
        lat: "37.810881",
        lng: "-122.296499",
        address: "whatever"
    )
end 