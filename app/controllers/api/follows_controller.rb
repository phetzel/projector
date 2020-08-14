class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new
        @follow.user_id = current_user.id
        @follow.show_id = params[:id]
        
        if @follow.save
            @show = @follow.show
            render 'api/shows/show'
        else 
            render json: @follow.errors.full_messages, status: 401
        end
    end 

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        @show = @follow.show 
        render 'api/shows/show'
    end 
end
