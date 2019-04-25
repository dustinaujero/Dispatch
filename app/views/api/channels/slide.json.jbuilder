json.extract! @channel, :id
json.messages do
    json.array! @channel.messages.ids
end