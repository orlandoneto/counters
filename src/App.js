import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { View, StatusBar, Text, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './store';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <StatusBar translucent barStyle='dark-content' />
            <Routes />
          </View>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
