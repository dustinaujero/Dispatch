export const fetchMessages = (channelId) => (
    $.ajax({
        url: `/api/channels/${channelId}/messages`,
        method: 'GET'
    })
)

export const fetchMessage = (id) => (
    $.ajax({
        url: `/api/messages/${id}`,
        method: 'GET'
    })
)

export const createMessage = (channelId, message) => (
    $.ajax({
        url: `/api/channels/${channelId}/messages`,
        method: 'POST',
        data: {message}
    })
)

export const updateMessage = (message) => (
    $.ajax({
        url: `/api/messages/${message.id}`,
        method: 'PATCH',
        data: {message}
    })
)

export const deleteMesssage = (id) => (
    $.ajax({
        url: `/api/messages/${id}`,
        method: 'DELETE'
    })
)