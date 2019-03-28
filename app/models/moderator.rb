class Moderator < ApplicationRecord
    
    validates :moderator_id, :server_id, presence: true

    belongs_to :moderator, 
        class_name: :User,
        foreign_key: :moderator_id    

    belongs_to :server,
        class_name: :Server,
        foreign_key: :server_id

end