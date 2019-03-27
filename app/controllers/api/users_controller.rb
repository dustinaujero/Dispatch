class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            if (params[:user][:username] == "")
                render json: @user.errors.full_messages.push("Username has already been taken"), status: 422
            else 
                render json: @user.errors.full_messages, status: 422
            end
        end
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 406
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:email, :username, :password, :img_url)
    end

end