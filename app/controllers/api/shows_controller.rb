class Api::ShowsController < ApplicationController

    def index
        @shows = Show.all
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
end
