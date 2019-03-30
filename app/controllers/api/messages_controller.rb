class Api::MessagesController < ApplicationController 

    before_action :ensure_logged_in

    def index 
        @messages = Message.where(channel_id: params[:channel_id])
        render :index
    end    
    
    def show
        @message = Message.find(params[:id])
        if @message
            render :show 
        else 
            render json: ["Message not found"], status: 404
        end
    end

    def create
        @message = Message.new(message_params)
        @message.channel_id = params[:channel_id]
        if @message.save
            render :show 
        else 
            render json: @message.errors.full_messages, status: 422 
        end
    end 

    def update 
        @message = Message.find(params[:id])
        if @message && @message.update(message_params)
            render :show 
        else
            render json: @message.errors.full_messages, status: 406
        end
    end 

    def destroy 
        @message = Message.find(params[:id])
        if @message && @message.user_id == current_user.id 
            @message.destroy 
            render json: ["Successfully Deleted Message"], status: 200
        else
            render json: ["Unable to delete message"], status: 401
        end 
    end

    private

    def message_params
        params.require(:channel).permit(:body_name)
    end

end

