# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

ActiveRecord::Base.transaction do
    User.destroy_all

    User.create!(
        id: "1",
        email: "admin",
        password: "admin1"
    )

    x = 2
    while x <= 50
        User.create!(
            id: x,
            email: Faker::Internet.safe_email,
            password: Faker::Internet.password(min_length: 8)
        )
        x += 1
    end 

    
    Movie.destroy_all

    Movie.create!(
        id: "1",
        title: "Titanic",
        run_time: "1:10:00",
        genre: "Horror",
        desc: "A fun family cruise gets turned upside down by a sneaky iceburg. "
                # Titanic is the first in the legendary horror triledge, which includes 
                # Titanic 2: Electric Boogaloo, and Jaws Vs. Titanic: The Crossover Movie!
    )

    Movie.create!(
        id: "2",
        title: "Air Bud",
        run_time: "2:10:00",
        genre: "Action",
        desc: " An actual real life dog disregards all youth sporting 
            regulations on his way to many sports comebacks"
    )

    Movie.create!(
        id: "3",
        title: "Ken Burns: Combo Mix",
        run_time: "11:11:40",
        genre: "Documentary",
        desc: "Highlights of some of documentary pioneer Ken Burn's greatest works."
    )

    Movie.create!(
        id: "4",
        title: "Mr. Bean",
        run_time: "2:11:40",
        genre: "Comedy",
        desc: "A European man goes about his normal life"
    )
    
    Show.destroy_all

    LOCATIONS = [
        ["37.81590577007779", "-122.29408293546018", "1689 20th St, Oakland, CA 94607, USA"],
        ["37.80721551868806", "-122.26354732586731", "274 19th St, Oakland, CA 94612, USA"],
        ["37.761708235486665", "-122.23999438887596", "1343 Broadway, Alameda, CA 94501, USA"],
        ["37.774857747654195", "-122.29770008981659", "167 W Oriskany Ave, Alameda, CA 94501, USA"],
        ["37.774831403529475", "-122.37250833995935", "750 Avenue E, San Francisco, CA 94130, USA"],
        ["37.774831403529475", "-122.50927288427883", "715 48th Ave, San Francisco, CA 94121, USA"],
        ["37.7666605482608", "-122.48604710814286", "1017 Martin Luther King Jr Dr, San Francisco, CA 94122, USA"],
        ["37.742349918001054", "-122.49610480071176", "2392 38th Ave, San Francisco, CA 94116, USA"],
        ["37.75496281744379", "-122.41637300400932", "1141 S Van Ness Ave, San Francisco, CA 94110, USA"],
        ["37.79743792804442", "-122.39868307116583", "Sydney G. Walton Square, San Francisco, CA 94111, USA"],
        ["37.87022365917184", "-122.27776118498203", "1687 Addison St, Berkeley, CA 94703, USA"],
        ["37.8801505188811", "-122.28528883076898", "1409 Hopkins St, Berkeley, CA 94702, USA"]
    ]

    TIMES = ["12:00:00", "18:00:00", "20:00:00", "22:00:00"]

    x = 1

    while x < 150
        time = TIMES.sample
        location = LOCATIONS.sample
        day = x % 31
        if day == 0
            day = 1
        end

        Show.create!(
            id: x,
            movie_id: 1 + rand(4),
            date: "2020-9-#{day}",
            time: time,
            lat: location[0],
            lng: location[1],
            address: location[2]
        )

        x += 1
    end

    while x < 300
        time = TIMES.sample
        location = LOCATIONS.sample
        day = x % 31
        if day == 0
            day = 1
        end


        Show.create!(
            id: x,
            movie_id: 1 + rand(4),
            date: "2020-10-#{day}",
            time: time,
            lat: location[0],
            lng: location[1],
            address: location[2]
        )

        x += 1
    end

    while x < 450
        time = TIMES.sample
        location = LOCATIONS.sample
        day = x % 31
        if day == 0
            day = 1
        end

        Show.create!(
            id: x,
            movie_id: 1 + rand(4),
            date: "2020-11-#{day}",
            time: time,
            lat: location[0],
            lng: location[1],
            address: location[2]
        )

        x += 1
    end

    while x <= 600
        time = TIMES.sample
        location = LOCATIONS.sample
        day = x % 31
        if day == 0
            day = 1
        end

        Show.create!(
            id: x,
            movie_id: 1 + rand(4),
            date: "2020-12-#{day}",
            time: time,
            lat: location[0],
            lng: location[1],
            address: location[2]
        )

        x += 1
    end
    

    Follow.destroy_all

    x = 1
    
    while x <= 200
        Follow.create!(
            id: x,
            user_id: 1 + rand(50),
            show_id: 1 + rand(600)
        )
        
        x += 1
    end

    Friend.destroy_all
end 