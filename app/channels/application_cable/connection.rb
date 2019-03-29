module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # identified_by :current_user

    # def connect 
    #   self.current_user = valid_user?
    # end

    private

    # def valid_user?
    #   user = User.find_by(session_token: session[:session_token])
    #   if user 
    #     user
    #   else
    #     reject_unauthorized_connection
    #   end
    # end
  end
end
