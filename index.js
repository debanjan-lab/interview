import React from "react";
import { AppRegistry } from 'react-native';
import App from '@src';
import { name as appName } from './app.json';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import store from "@store/configureStore";
const persistor = persistStore(store);
const Root = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
