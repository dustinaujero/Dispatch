class Message < ApplicationRecord

    validates :user_id, :channel_id, :body, presence: true 

    belongs_to :channel, class_name: :Channel, foreign_key: :channel_id 
    belongs_to :user,  class_name: :User, foreign_key: :user_id

    # has_one_attached :photo, optional: true
    # after_create_commit { MessageBroadcastJob.perform_later(self)}

end