@channels.each do |channel|
    json.set! channel.id do 
        json.extract! channel, :id, :channel_name, :server_id
        json.messages do 
            json.array! channel.messages.ids
        end
    end
end
@owned_channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :channel_name, :server_id
        json.messages do 
            json.array! channel.messages.ids
        end
    end
end