class Api::FriendsController < ApplicationController
    def create
        @friend = Friend.new 
        @friend.user_id = current_user.id 
        @friend.friend_id = params[:id]

        if @friend.save
            @user = @friend.user
            render 'api/users/show'
        else  
            render json: @friend.errors.full_messages, status: 401
        end 
    end 

    def destroy
        @friend = Friend.find_by(friend_id: params[:id]);
        @friend.destroy 
        @user = @friend.user
        render 'api/users/show'
    end
end
