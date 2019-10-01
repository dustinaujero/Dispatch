json.extract! @message, :id, :user_id, :body, :created_at, :updated_at
json.photoUrl url_for(@message.photo)