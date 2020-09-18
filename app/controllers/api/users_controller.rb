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

<<<<<<< HEAD
    def index
        @users = User.all
        render :index
    end

=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
    def show
        @user = User.find(params[:id])
    end

    def index
        @users = User.all
    end 

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end
