class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(*session_params)
        if @user
            login(@user)
            servers = current_user.servers.includes(:users, :channels)
            owned_servers = current_user.owned_servers.includes(:users, :channels)
            @all_servers = servers.to_a.concat(owned_servers.to_a)
            @dms = current_user.dms.includes(:members, :messages)
            debugger
            render :payload
        else
            erArr = ["Invalid email or password"]
            if (session_params[0].length == 0)
                erArr.push("Email cannot be blank")
            end
            if (session_params[1].length == 0)
                erArr.push("Password cannot be blank")
            end
            render json: erArr, status: 404
        end
    end

    def destroy
        logout
        redirect_to root_url, status: 200
    end

    private 
    
    def session_params
        params.require(:user).permit(:email, :password).values
    end

end