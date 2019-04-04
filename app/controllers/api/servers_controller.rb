class Api::ServersController < ApplicationController

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
            @ch = Channel.create({channel_name:"general", server_id: @server.id})
            @channel = [@ch]
            render :new
        else 
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server && @user.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 406
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

    def getCode 
        @server = Server.find(params[:id])
        if @server && @server.owner_id == current_user.id
            @server.reset_inv_code
            render :code
        else
            render json: ["Server Not Found"], status: 404
        end
    end

    def join
        @server = Server.find(params[:id])
        if @server && (@server.inv_code == params[:inv_code])
            @membership = Userserver.new({user_id: params[:user_id], server_id: params[:id]})
            if @membership.save
                @server.reset_inv_code
                render json: ["Successfully Joined Server"], status: 200
            else
                render json: ["Could Not Join Server"], status: 400
            end
        else
            render json: ["Server Not Found"], status: 404
        end
    end

    private

    def server_params
        params.require(:server).permit(:img_url, :server_name)
    end

end