json.currentUser do 
    json.extract! @user, :id, :username, :img_url, :email
    json.aliases @user.aliases, :nickname
end
@all_servers.each do |server|
    json.servers do
        json.set! server.id do 
            json.extract! server, :id, :server_name, :owner_id, :img_url, :inv_code
            json.users do 
                json.array! server.users.ids
            end
            json.channels do 
                json.array! server.channels.ids
            end
        end
    end
    json.channels do 
        server.channels.each do |channel|
            json.set! channel.id do 
                json.extract! channel, :id, :channel_name, :server_id
                json.messages do 
                    json.array! channel.messages.ids
                end
            end
        end
    end
    json.users do 
        server.users.each do |user|
            json.set! user.id do 
                json.extract! user, :id, :username
            end
        end
        json.set! server.owner.id do 
            json.extract! server.owner, :id, :username
        end
    end
end
@dms.each do |channel|
    json.dms do 
        json.set! channel.id do  
            json.extract! channel, :id
            json.messages do
                json.array! channel.messages.ids
            end
            json.users do 
                json.array! channel.members.ids
            end
        end
    end
    json.dmers do 
        channel.members.each do |user|
            json.set! user.id do 
                json.extract! user, :id, :username
            end
        end
    end
end

