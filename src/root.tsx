import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import sheep from './reducers/sheep'

const store = createStore(sheep)

export class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <h1>Hello World</h1>
            </Provider>
        );
    }
}
