class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(*args)
    ActionCable.server.broadcast 'room_channel', message: message
  end

  # private 

  # def render_message(message)
  #   ApplicationController.rendered.render
  # end
end
