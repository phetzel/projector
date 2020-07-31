class MoviesController < ApplicationController
    def index
        @movies = Movie.all
        render json: @movies 
    end 

    def show
        @movie = Movie.find(params[:id])
        render json: @movie 
    end 

    def create 
        @movie = Movie.new(movie_params)

        if @movie.save
            render json: @movie 
        else 
            render json: @movies.errors.full_messages, status: 422 
        end 
    end 

    private 

    def movie_params 
        params.require(:movie).permit(
            :title,
            :run_time,
            :desc
        )
    end 
    
end
