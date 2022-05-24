import React from 'react';
import { Provider } from 'react-redux';
import AppWrapper from '../containers/AppWrapper/AppWrapper';
import { YMaps } from 'react-yandex-maps';
import { store } from './configureStore';

const AppProvider = () => (
    <Provider store={store}>
        <YMaps>
            <AppWrapper />
        </YMaps>
    </Provider>
);

export default AppProvider;
