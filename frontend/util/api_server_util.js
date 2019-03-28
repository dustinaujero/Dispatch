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

