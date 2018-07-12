import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';
import * as BE from '../BE';

const initialState = {
    formsList: {
        forms: BE.getFormsList()
    },
    form: {
        tabs: {}
    }
};

export default function configureStore(history) {
    const middlewares = [thunk, routerMiddleware(history)];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        applyMiddleware(...middlewares)
    );

    if (module.hot) {
        // Reload reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(connectRouter(history)(rootReducer));
        });
    }

    return store;
}
