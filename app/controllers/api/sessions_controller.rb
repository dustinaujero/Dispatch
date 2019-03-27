class Api::SessionsController < ApplicationController

    def create
        debugger
        @user = User.find_by_credentials(*session_params)
        debugger
        if @user
            login(@user)
            render '/api/users/show'
        else
            render json: ["Invalid email or password"], status: 401
        end
    end

    def destroy
        logout
        redirect_to root_url
    end

    private 
    
    def session_params
        params.require(:user).permit(:email, :password).values
    end

end