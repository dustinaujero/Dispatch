class Channel < ApplicationRecord

    validates :channel_name, presence: true 

    belongs_to :server, class_name: :Server, foreign_key: :server_id, optional: true
    has_many :messages, class_name: :Message, foreign_key: :channel_id 
    has_many :aliases, class_name: :Nickname, foreign_key: :channel_id

    has_many :user_memberships, class_name: :Membership, foreign_key: :channel_id
    has_many :members, through: :user_memberships, source: :member

    has_one :owner, through: :server, source: :owner

end