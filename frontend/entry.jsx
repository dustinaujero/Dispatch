import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import { loading, clearLoading } from './actions/ui_actions';
import { fetchServers } from './actions/server_actions';




document.addEventListener("DOMContentLoaded", () => {
    if (window.currentUser) {
        $.when(
            $.ajax({ method: "GET", url: "/api/servers" }),
            $.ajax({ method: "GET", url: "/api/channels/all" })
        ).done( (servers, channels) => {
            debugger
            const state = {
                session: { user: window.currentUser },
                entities: { servers: servers[0], channels: channels[0] }
            };
            debugger
            const store = configureStore(state);
            delete window.currentUser;
            window.store = store;
            debugger
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