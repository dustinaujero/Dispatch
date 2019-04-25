class Api::ChannelsController < ApplicationController

    before_action :ensure_logged_in 

    def index 
        @channels = Channel.where(server_id: params[:server_id])
        render :index
    end 
    
    def show
        @channel = Channel.find(params[:id])
        if @channel 
            render :show 
        else
            render json: ["Channel not found"], status: 404
        end
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.server_id = params[:server_id]
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end 

    def update 
        @channel = Channel.find(params[:id])
        if @channel && @channel.update(channel_params)
            render :show 
        else
            render json: @channel.errors.full_messages, status: 406
        end
    end 

    def destroy 
        @channel = Channel.find(params[:id])
        if @channel && @channel.owner.id == current_user.id 
            @channel.destroy 
            render json: ["Successfully Deleted Channel"], status: 200
        else
            render json: ["Unable to delete channel"], status: 401
        end 
    end

    def all 
        @channels = current_user.servers.map {|server| server.channels.to_a }.flatten
        @owned_channels = current_user.owned_servers.map {|server| server.channels.to_a }.flatten
        render :all
    end

    def dms
        @dms = current_user.dms.includes(:members)
        render :dms
    end

    def slide 
        @dm = Channel.new({channel_name: params[:username]})
        @dmee = User.find_by(username: params[:username])
        if @dmee && @dm.save
            render :slide
        else
            render json: ["Can't find user"], status: 404
        end
    end
    
    private

    def channel_params
        params.require(:channel).permit(:channel_name)
    end

end