module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # identified_by :current_user

    # def connect 
    #   self.current_user = User.find_by(session_token: session[:session_token]).id
    # end

    # private

    # def valid_user?
    #   user = User.find_by(session_token: session[:session_token])
    #   if user 
    #     user
    #   else
    #     reject_unauthorized_connection
    #   end
    # end
  end
  # class Connection < ActionCable::Connection::Base
  #   identified_by :current_user

  #   def connect 
  #     self.current_user = find_verified_user
  #   end

  #   private
  #     def find_verified_user
  #       if verified_user = User.find_by(session_token: request.session.fetch('session_token', nil))
  #         verified_user
  #       else  
  #         reject_unauthorized_connection
  #       end
  #     end
  # end
end
