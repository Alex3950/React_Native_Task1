/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Ncash_wealth from './android/app/src/Components/Ncash_wealth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
    //flexDirection: 'column',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Ncash_wealth />
    </SafeAreaView>
  );
};
export default App;
