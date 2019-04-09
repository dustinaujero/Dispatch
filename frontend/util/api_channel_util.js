export const fetchChannels = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: 'GET',
    })
)

export const fetchChannel = (id) => (
    $.ajax({
        url: `/api/channels/${id}`,
        method: 'GET',
    })
)

export const createChannel = (serverId, channel) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: 'POST',
        data: { channel }
    })
)

export const updateChannel = (channel) => (
    $.ajax({
        url: `/api/channels/${channel.id}`,
        method: 'PATCH',
        data: { channel }
    })
)

export const deleteChannel = (id) => (
    $.ajax({
        url: `/api/channels/${id}`,
        method: 'DELETE'
    })
)