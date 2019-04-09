json.extract! @server, :id, :server_name, :owner_id, :img_url, :inv_code
json.channels do 
    @server.channels.ids
end