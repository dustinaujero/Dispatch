class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    channel = Channel.find(message.channel_id)
    ActionCable.server.broadcast(channel, message)
  end

  # private 

  # def render_message(message)
  #   ApplicationController.rendered.render
  # end
end
