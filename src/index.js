import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyles from '~/components/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';

ReactDOM.render(
    // <React.StrictMode>
    <GlobalStyles>
        <Provider store={store}>
            <App />
        </Provider>
    </GlobalStyles>,
    /* </React.StrictMode>, */
    document.getElementById('root'),
);
