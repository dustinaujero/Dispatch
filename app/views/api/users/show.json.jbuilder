json.extract! @user, :id, :username, :img_url, :email
json.aliases @user.aliases, :nickname