@channels.each do |channel|
    json.set! channel do  
        json.extract! channel, :id, :channel_name
        json.messages do
            json.array! channel.messages do |message|
                message.id 
            end
        end
    end
end

