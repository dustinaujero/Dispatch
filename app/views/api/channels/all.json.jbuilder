@channels.each do |channel|
    json.set! channel.id do 
        json.extract! channel, :id, :channel_name
    end
end
@owned_channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :channel_name
    end
end