class Userserver < ApplicationRecord 
    validates :user_id, :server_id, presence: true 

    belongs_to :user 
    belongs_to :server
end