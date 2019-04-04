json.extract! @server, :id, :server_name, :owner_id, :img_url
json.channels do 
    json.array! @server.channels.ids
end
        