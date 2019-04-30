import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import { loading, clearLoading } from './actions/ui_actions';
import { fetchServers } from './actions/server_actions';
import ChannelShow from './components/channels/channel_show';
import { merge } from 'lodash';




document.addEventListener("DOMContentLoaded", () => {
    if (window.currentUser) {
        $.when(
            $.ajax({ method: "GET", url: "/api/servers" }),
            $.ajax({ method: "GET", url: "/api/channels/all" }),
            $.ajax({ method: 'GET', url: `/api/channels/dms` })
        ).done( (payload, channels, dms) => {
            const state = {
                session: { user: window.currentUser.id },
                entities: { servers: payload[0].servers, 
                            users: merge({}, payload[0].users, {[window.currentUser.id]: window.currentUser}),
                            channels: channels[0], 
                            dms: merge({}, dms[0])
                        }
            };
            const store = configureStore(state);
            delete window.currentUser;
            window.store = store;
            window.loading = loading;
            window.clearLoading = clearLoading;
            const root = document.getElementById('root');
            ReactDOM.render(<Root store={store} />, root);
        })
    } 
    else {
        const store = configureStore();
        window.store = store;

        const root = document.getElementById('root');
        ReactDOM.render(<Root store={store} />, root);
    }
});