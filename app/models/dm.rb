class Dm < ApplicationRecord 

    validates :direct_id, :user_id, :body, presence: true

    belongs_to :direct, class_name: :Direct, foreign_key: :direct_id
    belongs_to :user, class_name: :User, foreign_key: :user_id 
     
end