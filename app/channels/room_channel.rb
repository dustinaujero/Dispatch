class RoomChannel < ApplicationCable::Channel
  def subscribed
    if params['channel_id']
      channel = Channel.find(params['channel_id'])
      stream_for channel
    end
  end

  def speak(data) 

    sender = User.find_by(id: data['user_id'])
    channel_id = data['channel_id']
    body = data['body']

    message = Message.create({
      user_id: sender.id,
      channel_id: channel_id,
      body: body
    })
    msg = {
      type: "msg",
      id: message.id,
      user_id: sender.id,
      body: body, 
      created_at: message.created_at.strftime("Today at %I:%M %p")
    }

    channel = Channel.find(channel_id)
    RoomChannel.broadcast_to(channel, msg)
  end

  def typing(data)
    typer = User.find_by(id: data['user_id'])
    

    payload = {
      type: "type",
      user_id: typer.id,
      typing: true
    }
    channel_id = data['channel_id']
    channel = Channel.find(channel_id)
    RoomChannel.broadcast_to(channel, payload)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
