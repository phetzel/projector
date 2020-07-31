class Api::ShowsController < ApplicationController

    def index
        shows = bounds ? Show.in_bounds(bounds) : Show.all

        # if params[:startDate] && params[:endDate]
        #     shows = shows.where(date: date_range)
        # end 

        @shows = shows.includes(:movie)
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
            :date,
            :lat,
            :lng,
            :desc
        )
    end

    def bounds 
        params[:bounds]
    end 

    def date_range
        (params[:startDate]..params[:endDate])
    end
end
