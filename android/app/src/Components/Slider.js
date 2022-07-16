/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {SliderComponent} from '@react-native-community/slider';
import React, {useState} from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
//import Slider from 'react-native-custom-slider';
import Slider from '@react-native-community/slider';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Custom = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [val, setVal] = useState(0);
  const img = '../app/src/Components/images/rs.png';
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
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Text>Hiii</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Slider
        style={{width: 350}}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        maximumValue={25000}
        minimumValue={500}
        //thumbTintColor="transparent"
        step={100}
        //value={sliderValue1}
        //onSlidingComplete={value => setSliderValue1(value)}
        //onValueChange={value => setSliderValue(value)}
        // onSlidingStart={() => {
        //   Keyboard.dismiss();
        //   setCheck(true);
        //   setRen(false);
        // }}
        //thumbTouchSize={1000}
        scaleX={1}
        scaleY={6}

        //translateX={50}
        //translateY={50}
      />
    </SafeAreaView>
  );
};
export default Custom;

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: 'rgba(150, 150, 150, 0.6)',
    borderWidth: 14,
    borderRadius: 15,
  },
});
