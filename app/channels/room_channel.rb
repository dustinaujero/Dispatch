class RoomChannel < ApplicationCable::Channel
  def subscribed
    # if params[:channel_id].present?
      # stream_from("ChatRoom-#{(params[:channel_id])}")
    # end
    # stream_from 'room_channel'
  end

  def speak(data) 
    # # sender = User.find_by(email: )
    # message = Message.create(body: data['message'], user_id: data['user_id'], channel_id: data['channel_id']
    # data = { message: message.body }
    # RoomChannel.broadcast_to('room_channel', data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
