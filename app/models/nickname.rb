class Nickname < ApplicationRecord

    validates :user_id, :channel_id, :nickname, presence: true 
    validates :user_id, uniqueness: { scope: :channel_id }

    belongs_to :user, class_name: :User, foreign_key: :user_id 
    belongs_to :channel, class_name: :Channel, foreign_key: :channel_id 

end