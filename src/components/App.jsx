import React from 'react';
import Phonebook from './Phonebook';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Phonebook />
        </PersistGate>
      </Provider>
    </div>
  );
};
