class User < ApplicationRecord 

    validates :email, :username, :password_digest, :session_token, :img_url, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, :username, uniqueness: true

    attr_reader :password 
    after_initialize :ensure_session_token, :ensure_img_url, :create_username
    

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def reset_session_token
        self.update(session_token: User.generate_session_token)
        self.session_token
    end
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end  
    private  

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end    

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end   
    
    def ensure_img_url
        self.img_url ||= "img_url";
    end

    def create_username
        self.username ||= self.username + "#" + (rand(0.00...1.00) * 10000 % 10000).to_i.to_s
    end

end