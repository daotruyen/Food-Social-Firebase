import React from 'react';
import {View, LogBox, StatusBar} from 'react-native';
import AppWithNavigationState from '@navigators';
import GlobalLoading, {globalLoadingRef} from '@components/GlobalLoading';
import GlobalMessage, {globalMessageRef} from '@components/GlobalMessage';
import {I18nextProvider} from 'react-i18next';
import i18next from '@utils/locales/i18n';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@reduxCore/store';
import {Settings} from 'react-native-fbsdk-next';

LogBox.ignoreAllLogs(true);
StatusBar.setBarStyle('dark-content');
const MyBase = () => {
  Settings.setAppID('312603384640286');
  Settings.initializeSDK();
  return (
    <View style={{flex: 1}}>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppWithNavigationState />
            <GlobalLoading ref={globalLoadingRef} />
            <GlobalMessage ref={globalMessageRef} />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </View>
  );
};
export default MyBase;
