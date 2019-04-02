class Server < ApplicationRecord

    validates :server_name, :owner_id, :img_url, :inv_code, presence: true
    after_initialize :ensure_img_url, :ensure_inv_code

    #user + mods
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :mod_subs, class_name: :Moderator, foreign_key: :server_id
    has_many :moderators, through: :mod_subs, source: :moderator
    has_many :userserver_subs, class_name: :Userserver, foreign_key: :server_id
    has_many :users, through: :userserver_subs, source: :user

    #channels
    has_many :channels, class_name: :Channel, foreign_key: :server_id

    def ensure_img_url
        self.img_url ||= "empty"
    end

    def ensure_inv_code
        self.inv_code ||= Server.generate_inv_code
    end

    def reset_inv_code
        self.update(inv_code: Server.generate_inv_code)
        self.inv_code
    end

    def self.generate_inv_code
        SecureRandom::hex(3)
    end

end