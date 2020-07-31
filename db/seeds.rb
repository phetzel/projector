# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    Show.destroy_all

    Show.create!(
        id: "1",
        movie_id: "1",
        date: "2020-10-10",
        lat: "37.817980",
        lng: "-122.278220"
    )
    
    Show.create!(
        id: "2",
        movie_id: "1",
        date: "2020-10-10",
        lat: "37.810805",
        lng: "-122.291081"
    )

    Show.create!(
        id: "3",
        movie_id: "2",
        date: "2020-10-10",
        lat: "37.810881",
        lng: "-122.296499"
    )

    Movie.destroy_all

    Movie.create!(
        id: "1",
        title: "titanic",
        run_time: "1:10:00"
    )

    Movie.create!(
        id: "2",
        title: "air bud",
        run_time: "2:10:00"
    )
end 