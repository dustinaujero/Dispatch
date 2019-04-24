class Api::DmsController < ApplicationController 

    before_action :ensure_logged_in

    def index 
        @messages = Dm.where(direct_id: params[:direct_id])
        render "api/messages/index"
    end    
    
    def show
        @message = Dm.find(params[:id])
        if @message
            render :show 
        else 
            render json: ["Message not found"], status: 404
        end
    end

    def create
        #create using actioncable
    end 

    def update 
        @message = Dm.find(params[:id])
        if @message && @message.update(dm_params)
            render :show 
        else
            render json: @message.errors.full_messages, status: 406
        end
    end 

    def destroy 
        @message = Dm.find(params[:id])
        if @message && @message.user_id == current_user.id 
            @message.destroy 
            render json: ["Successfully Deleted Message"], status: 200
        else
            render json: ["Unable to delete message"], status: 401
        end 
    end

    private

    def dm_params
        params.require(:dm).permit(:body)
    end

end
