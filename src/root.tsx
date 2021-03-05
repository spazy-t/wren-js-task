import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import sheep from './reducers/sheep'
//import logger from './middleware/logger'

import App from './screens/App'

const store = createStore(sheep)

export class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
