@servers.each do |server|
    json.set! server.id do 
        json.extract! server, :id, :server_name, :owner_id, :img_url
    end
end
@owned_servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :server_name, :owner_id, :img_url
    end
end