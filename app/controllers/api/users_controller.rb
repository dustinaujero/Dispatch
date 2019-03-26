class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            flash.now[:errors] = @user.errors.full_messages
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end


        jibi 

        iubuub
        ouononoin ohooih  oimrsrfl p9uw   9-90h 
        
    end

    private
    
    def user_params
        params.require(:user).permit(:email, :username, :password, :img_url)
    end

end