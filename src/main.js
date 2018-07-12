import React from 'react';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from './store/configureStore';

import AppContainer from './components/main/AppContainer';
import FormsListPage from './containers/formsList/FormsListPage';
import FormPage from './containers/form/FormPage';

const history = createHistory();
const store = configureStore(history);

const app = () => render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer>
                <Route exact path="/" component={FormsListPage} />
                <Route path="/form/:formUuid/:tabUuid" component={FormPage} />
            </AppContainer>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

app();


// Reload components
module.hot.accept('./main', () => {
    app();
});
