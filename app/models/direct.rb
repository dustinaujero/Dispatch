class Direct < ApplicationRecord

    validates :userA, :userB, presence: true
    validates :userA, uniqueness: { scope: :userB}


end