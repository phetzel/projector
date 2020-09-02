class Api::ShowsController < ApplicationController

    def index
        shows = bounds ? Show.in_bounds(bounds) : Show.all
        shows = shows.where(date: date)

        shows = shows.includes(:movie)

        if genre != ""
            shows = shows.select{ |show| show.movie.genre  == genre }
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
end
