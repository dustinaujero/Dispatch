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
        @dms = current_user.dms.includes(:members, :messages)
        render :dms
    end

    def slide 
        @dm = Channel.new({channel_name: params[:username]})
        @dmee = User.find_by(username: params[:username])
        if @dmee && @dm.save
            Membership.create!({user_id: @dmee.id, channel_id: @dm.id})
            Membership.create!({user_id: current_user.id, channel_id: @dm.id})
            render :slide
        else
            render json: @dm.errors.full_messages, status: 404
        end
    end

    def find
        if params[:channel_name].length > 0
            @channels = Channel.where("channel_name ILIKE ?", "#{params[:channel_name]}%")
            render :search
        else 
            render json: [], status: 200
        end
    end

    def dm_find
        if params[:username].length > 0
            # @dms = Channel.find_by_sql([
            #             'SELECT title FROM posts WHERE author = ? AND created > ?',
            #             author_id,
            #             start_date
            #         ])
            # find dm channels with given username
            @dmss = Channel.find_by_sql("
                        SELECT
                            channels.*
                        FROM
                            channels
                        JOIN
                            memberships ON channels.id = membership.channel_id
                        JOIN (
                            SELECT
                            users.*
                            FROM
                            users
                            WHERE
                            username LIKE ?
                        ) ON (memberships.user_id = users.id)
                        ", "#{params[:username]}%")
            debugger
        else
            render json: ["No DM's found"], status: 200
        end

    end
    
    private

    def channel_params
        params.require(:channel).permit(:channel_name)
    end

end