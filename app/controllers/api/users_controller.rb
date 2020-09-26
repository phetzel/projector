class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end 
    end

    def index
        
        if user_email != ""
            users = User.all
            @users = users.where(id: current_user)
                .or(users.where('email LIKE ?', "%#{user_email}%")).limit(10)
        else
            @users = User.where(id: current_user)
        end

        render :index
    end

    def show
        @user = User.find(params[:id])
    end


    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

    def user_email
        params[:userEmail]
    end 
end
