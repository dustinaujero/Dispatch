json.extract! @server, :id, :server_name, :owner_id, :img_url
json.channels do 
    @server.channels.ids
end