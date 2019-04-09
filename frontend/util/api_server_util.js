export const fetchServers = () => (
    $.ajax({
        url: '/api/servers',
        method: 'GET'
    })
)
export const fetchServer = (id) => (
    $.ajax({
        url: `/api/servers/${id}`,
        method: 'GET'
    })
)
export const createServer = (server) => (
    $.ajax({
        url: '/api/servers',
        method: 'POST',
        data: { server }
    })
)
export const updateServer = (server) => (
    $.ajax({
        url: `/api/servers/${server.id}`,
        method: 'PATCH',
        data: { server }
    })
)
export const deleteServer = (id) => (
    $.ajax({
        url: `/api/servers/${id}`,
        method: 'DELETE'
    })
)
export const joinServer = (invCode) => (
    $.ajax({
        url: `/api/servers/invite`,
        method: 'POST',
        data: {inv_code: invCode.code}
    })
)
export const getServerCode = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}/invite`,
        method: 'GET'
    })
)