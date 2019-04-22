class RoomChannel < ApplicationCable::Channel
  def subscribed
    # if params[:channel_id]
      # stream_from("channel-#{(params[:channel_id])}")
      channel = Channel.find(params['channel_id'])
      # stream_for("channel-#{params['channel_id']}")
      # stream_for "please_work"
      stream_for channel
    # end
  end

  def speak(data) 
    # # sender = User.find_by(email: )
    # message = Message.create(body: data['message'], user_id: data['user_id'], channel_id: data['channel_id']
    # data = { message: message.body }
    # RoomChannel.broadcast_to('room_channel', data)
    sender = User.find_by(id: data['user_id'])
    channel_id = data['channel_id']
    body = data['body']

    message = Message.create({
      user_id: sender.id,
      channel_id: channel_id,
      body: body
    })
    channel = Channel.find(channel_id)
    RoomChannel.broadcast_to(channel, message)

    # Message.create({
    #   user_id: sender.id,
    #   channel_id: channel_id,
    #   body: body
    # })

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
