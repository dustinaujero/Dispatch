json.extract! @channel, :id, :channel_name, :server_id
json.messages do
    json.array! @channel.messages.ids
end