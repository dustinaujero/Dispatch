class Membership < ApplicationRecord
    validates :user_id, :channel_id, presence: true 
    validates :user_id, uniqueness: { scope: :channel_id }

    belongs_to :channel, class_name: :Channel, foreign_key: :channel_id
    belongs_to :member, class_name: :User, foreign_key: :user_id

    belongs_to :direct, class_name: :Direct, foreign_key: :channel_id
end