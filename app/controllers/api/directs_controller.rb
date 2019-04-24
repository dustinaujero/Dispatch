class Api::DirectsController < ApplicationController

    before_action :ensure_logged_in 

    def index 
        @directs = current_user.directs.includes(:users)
    end

    def show
        @direct = Direct.find(params[:id]).includes(:messages)
        if @direct
            render :show
        else 
            render json: ["DM not found"], status: 404
        end
    end

    def create
        user_b = User.find_by(username: params[:username])
        if user_b
            @direct = Direct.new({userA: current_user.id, userB: user_b.id})
            if @direct.save 
                Membership.create({user_id: current_user.id, channel_id: @direct.id})
                render json: ["ok"], status: 200
            else
                render json: @direct.errors.full_messages, status: 422
        else
            render json: ["Can't find user"], status: 404
        end
    end


end