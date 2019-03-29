@messages.each do |message|
    json.set! message.id do 
        json.extract! @message, :id, :user_id, :body, :created_at, :updated_at
    end
end