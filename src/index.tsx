import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension'

import {createStore} from 'redux';
import {StoreState} from './types'
import {EnthusiasmAction} from './actions'
import enthusiasm from './reducers'
import {Provider} from 'react-redux'

const store = createStore(enthusiasm, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
