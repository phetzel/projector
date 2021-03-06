class Api::ShowsController < ApplicationController

    def index
        shows = bounds ? Show.in_bounds(bounds) : Show.all
        shows = shows.where(date: date)

        shows = shows.includes(:movie)

        if genre != ""
            shows = shows.select{ |show| show.movie.genre  == genre }
        end 

        if time == "Morning"
            shows = shows.select{ |show| show.time.strftime('%H:%M:%S') < '12:00:00' }
        end

        if time == "Afternoon"
            shows = shows.select{ |show| show.time.strftime('%H:%M:%S') >= '12:00:00' && show.time.strftime('%H:%M:%S') < '20:00:00' }
        end 

        if time == "Night"
            shows = shows.select{ |show| show.time.strftime('%H:%M:%S') >= '20:00:00' }
        end
        
        @shows = shows
        render :index
    end 

    def show
        @show = Show.find(params[:id])
        render :show
    end

    def create
        @show = Show.new(show_params)

        if @show.save
            render :show
        else 
            render json: @show.errors.full_messages, status: 422
        end 
    end 

    private 

    def show_params 
        params.require(:show).permit(
            :movie_id,
            :time,
            :date,
            :lat,
            :lng,
            :desc,
            :address
        )
    end

    def bounds 
        params[:bounds]
    end 

    def date
        params[:date]
    end

    def genre
        params[:genre]
    end 

    def time
        params[:time]
    end
end
