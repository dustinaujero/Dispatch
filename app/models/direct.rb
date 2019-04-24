class Direct < ApplicationRecord

    validates :userA, :userB, presence: true
    validates :userA, uniqueness: { scope: :userB}

    has_many :memberships, class_name: :Membership, foreign_key: :channel_id
    has_many :messages, class_name: :Dm, foreign_key: :direct_id
end