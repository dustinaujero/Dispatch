class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:username], params[:password])
        if @user
            login(@user)
            render '/api/users/show'
        else
            flash.now[:errors] = @user.errors.full_messages
            render json: ["Invalid email or password"], status: 401
        end
    end

    def destroy
        logout
        redirect_to root_url
    end

end