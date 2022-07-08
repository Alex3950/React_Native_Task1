/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
  TextInput,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react';
import ImageCarousel from './android/app/src/Components/Caro';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [input, setInput] = useState(sliderValue);
  const [sliderValue, setSliderValue] = useState(15);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

      <View>
        <Image
          style={styles.ncash}
          source={require('./android/app/src/Components/images/ncash_wealth.png')}
        />
      </View>
      <View style={styles.investpad}>
        <Text style={styles.invest}>
          Invest Rs.25000* monthly to {'\n'} achieve Financial Independence
        </Text>
      </View>

      <View style={styles.simultepad}>
        <Text style={styles.simulte}>Simulate Corpus</Text>

        <TextInput
          style={{
            height: 40,
            width: 200,

            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChange={() => setInput(sliderValue)}
          inlineImageLeft="username"
          inlineImagePadding={2}
          underlineColorAndroid="transparent"
          value={sliderValue}
        />
      </View>

      <View>
        <Text style={styles.bar}>Value of slider is : {sliderValue}</Text>

        <Slider
          style={styles.bar1}
          maximumValue={25000}
          minimumValue={500}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={500}
          value={sliderValue}
          onValueChange={sliderValue => setSliderValue(sliderValue)}
        />
      </View>

      <View style={styles.car}>
        <Text style={{textAlign: 'center'}}>
          Choose the option your most likely to invest in
        </Text>

        {/* <View>
        <Carousel
          ref={carouselRef}
          data={Array(3).fill(0)}
          renderItem={renderItem}
          style={styles.carousel}
          itemWidth={windowWidth * 0.8}
          containerWidth={windowWidth}
          separatorWidth={0}
        />
      </View> */}

        <ScrollView style={{flexGrow: 0, top: -40}}>
          <ImageCarousel />
        </ScrollView>
      </View>
      <View style={{top: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Image
            style={styles.level}
            source={require('./android/app/src/Components/images/Level.png')}
          />
          <Text style={{left: 7, fontSize: 14}}>
            We have assumed the 'Aggressive' risk{'\n'}
            profile for you in order to arrive at the {'\n'}
            above numbers.You would be able to{'\n'}
            change this in the subsequence steps {'\n'}
            before you invest.
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        {/* <Button title="GET STARTED" color={'black'} /> */}
        <Text
          onPress={() => alert('Nothing')}
          style={{
            color: 'white',
            textAlign: 'center',
            paddingTop: 8,
            fontSize: 25,
          }}>
          GET STARTED
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ncash: {
    height: 55,
    width: 250,
    top: 0,
  },
  invest: {
    // numberOfLines: 2,
    fontSize: 18,
    textAlign: 'center',
    // top: 30,
    // bottom: 20,
  },
  investpad: {
    // numberOfLines: 2,
    // fontSize: 18,
    // textAlign: "center",

    top: 20,
  },
  simulte: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
  },
  simultepad: {
    //bottom: 20,
    top: 30,
  },
  bar: {
    textAlign: 'center',
    //flex: 0.5,
    top: 50,
  },
  bar1: {
    textAlign: 'center',
    //flex: 0.5,
    top: 100,
    width: 350,
  },
  carousel: {
    flexGrow: 0,
    height: 150,
  },
  car: {
    top: 140,
    textAlign: 'center',
    flexGrow: 0,
  },
  level: {
    height: 80,
    width: 130,
    left: -3,
  },
  btn: {
    width: 350,
    height: 60,
    //elevation: 8,
    //backgroundColor: '#009688',

    top: 80,
    //backgroundColor: 'white',
    backgroundColor: 'black',
    borderWidth: 2,
    //borderColor: 'white',
    borderRadius: 30,
  },
});

export default App;
