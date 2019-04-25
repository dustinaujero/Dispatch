@dms.each do |channel|
    json.set! channel.id do  
        json.extract! channel, :id
        json.messages do
            json.array! channel.messages.ids
        end
    end
    json.users do 
        json.array! channel.members.ids
    end
end

