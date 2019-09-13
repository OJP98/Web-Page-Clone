import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <App />
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);