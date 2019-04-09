class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    debugger
    ActionCable.server.broadcast("channel-1", message)
  end

  # private 

  # def render_message(message)
  #   ApplicationController.rendered.render
  # end
end
