import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import { loading, clearLoading } from './actions/ui_actions';
import { fetchServers } from './actions/server_actions';




document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const state = {
           session: { id: window.currentUser.id }
        };
        store = configureStore(state);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    





    window.store = store;
    window.loading = loading;
    window.clearLoading = clearLoading;
    window.fetchServers = fetchServers;






    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});