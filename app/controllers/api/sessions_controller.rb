class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(*session_params)
        if @user
            login(@user)
            render '/api/users/show'
        else
            erArr = ["Invalid email or password"]
            if (session_params[0].length == 0)
                erArr.push("Email cannot be blank")
            elsif (session_params[1].length == 0)
                erArr.push("Password cannot be blank")
            end
            render json: erArr, status: 404
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