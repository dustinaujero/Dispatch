json.extract! @dm, :id
json.messages do
    json.array! @dm.messages.ids
end
json.users do 
    json.array! @dm.members.ids
end