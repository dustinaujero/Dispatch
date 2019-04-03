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
        @channels = current_user.channels
        @owned_channels = current_user.owned_channels
        render :all
    end

    private

    def channel_params
        params.require(:channel).permit(:channel_name)
    end

end