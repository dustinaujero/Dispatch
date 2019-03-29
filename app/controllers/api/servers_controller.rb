class ServersController < ApplicationController

    before_action :ensure_logged_in

    def index
        @servers = current_user.servers
        @owned_servers = current_user.owned_servers
        render :index
    end

    def show
        @server = Server.find(params[:id])
        if @server
            render :show 
        else 
            render json: ["Server not found"], status: 404
        end
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id 
        if @server.save 
            render :show 
        else 
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server && @user.update(server_params)
            render :show
        else
            render json :@server.errors.full_messages, status: 406
        end
    end

    def destroy
        @server = Server.find(params[:id])
        if @server && @server.owner_id == current_user.id
            @server.destroy 
            render json: ["Successfull Deleted Server"], status: 200
        else 
            render json: ["Unable to delete server"], status: 401
        end
    end

    private

    def server_params
        params.require(:server).permit(:img_url, :server_name)
    end

end