class Api::ShowsController < ApplicationController

    def index
        @shows = bounds ? Show.in_bounds(bounds) : Show.all
        render json: @shows
    end 

    def show
        @show = Show.find(params[:id])
        render json: @show
    end

    def create
        @show = Show.new(show_params)

        if @show.save
            render json: @show
        else 
            render json: @show.errors.full_messages, status: 422
        end 
    end 

    private 

    def show_params 
        params.require(:show).permit(
            :movie_id,
            :date,
            :time,
            :lat,
            :lng,
            :desc
        )
    end

    def bounds 
        params[:bounds]
    end 
end
