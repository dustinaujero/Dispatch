@messages.each do |message|
    if message.created_at.between?(Time.now.ago(24.hours), Time.now) 
        formatted_date = message.created_at.strftime("Today at %I:%M %p")
        json.set! message.id do 
            json.extract! message, :id, :user_id, :body, :created_at, :updated_at
            json.set! :created_at, formatted_date
            if message.photo.attached?
                json.photoUrl url_for(message.photo)
            end
        end
    elsif message.created_at.between?(Time.now.ago(48.hours), Time.now.ago(24.hours)) 
        formatted_date = message.created_at.strftime("Yesterdat at %I:%M %p")
        json.set! message.id do 
            json.extract! message, :id, :user_id, :body, :updated_at
            json.set! :created_at, formatted_date
            if message.photo.attached?
                json.photoUrl url_for(message.photo)
            end
        end
    else 
        formatted_date = message.created_at.strftime("%b %-d, %Y")
        json.set! message.id do 
            json.extract! message, :id, :user_id, :body, :updated_at
            json.set! :created_at, formatted_date
            if message.photo.attached?
                json.photoUrl url_for(message.photo)
            end
        end
    end
end