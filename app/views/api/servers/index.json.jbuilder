@servers.each do |server|
    json.set! server.id do 
        json.extract! server, :id, :server_name, :owner_id, :img_url
        json.users do 
            json.array! server.users.ids
        end
        json.channels do 
            json.array! server.channels.ids
        end
    end
end
@owned_servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :server_name, :owner_id, :img_url
        json.users do 
            json.array! server.users.ids
        end
        json.channels do 
            json.array! server.channels.ids
        end
    end
end