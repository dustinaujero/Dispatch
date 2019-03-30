@servers.each do |server|
    json.set! server.id do 
        json.extract! server, :id, :server_name, :owner_id, :img_url
        json.users do 
            json.array! server.users do |user|
                user.id
            end
        end
    end
end
@owned_servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :server_name, :owner_id, :img_url
        json.users do 
            json.array! server.users do |user|
                user.id
            end
        end
    end
end