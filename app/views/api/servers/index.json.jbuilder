
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

