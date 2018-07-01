import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import AppContainer from './components/main/AppContainer';
import FormsListContainer from './containers/formsList/FormsListContainer';
import FormsListPage from './containers/formsList/FormsListPage';
import FormPage from './containers/form/FormPage';
import FormContainer from './containers/form/FormContainer';

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer>
                <FormsListPage>
                    <Route path="/" component={FormsListContainer} />
                </FormsListPage>
                <FormPage>
                    <Route path="/form/:formUuid/tabUuid" component={FormContainer} />
                </FormPage>
            </AppContainer>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
