import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '~/components/GlobalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';
import { dark } from '@mui/material/styles/createPalette';

const theme = createTheme({});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>

    <GlobalStyles>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </GlobalStyles>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
