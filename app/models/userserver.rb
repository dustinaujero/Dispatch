class Userserver < ApplicationRecord 
    validates :user_id, :server_id, presence: true 
    validates :user_id, uniqueness: { scope: :server_id }
    belongs_to :user 
    belongs_to :server
end