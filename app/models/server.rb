class Server < ApplicationRecord

    validates :server_name, :owner_id, :img_url, presence: true
    after_initialize :ensure_img_url

    #user + mods
    belongs_to :owner, class_name: :User, foreign_key: :owner_id
    has_many :mod_subs, class_name: :Moderator, foreign_key: :server_id
    has_many :moderators, through: :mod_subs, source: :moderator
    has_many :userserver_subs, class_name: :Userserver, foreign_key: :server_id
    has_many :users, through: :userserver_subs, source: :user

    #channels
    has_many :channels, class_name: :Channel, foreign_key: :server_id

    def ensure_img_url
        self.img_url ||= "img_url"
    end

end