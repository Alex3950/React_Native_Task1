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
  Box,
  TouchableOpacity,
  Input,
  Keyboard,
} from 'react-native';
import Slider from '@react-native-community/slider';
//import {Slider} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react';
import ImageCarousel from './Caro';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

const Ncash_wealth = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [amount, setAmount] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue1, setSliderValue1] = useState(0);
  const [check, setCheck] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
    //flexDirection: 'column',
  };
  const changeAmount = newAmount => {
    if (isNaN(newAmount)) {
      setAmount('');
    } else {
      //setAmount(Math.max(500, newAmount));
      setAmount(newAmount);
    }
    console.log('changeAmount: ', newAmount);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

      <View style={{flexDirection: 'row', top: 10}}>
        <View style={{color: '#000000'}}>
          <EvilIcons name="chevron-left" size={70} />
        </View>
        <Image
          style={styles.ncash}
          source={require('./images/ncash_wealth.png')}
        />
        <View>
          <EvilIcons name="chevron-left" size={70} color={'white'} />
        </View>
      </View>
      <View style={styles.investpad}>
        <Text style={styles.invest}>
          Invest Rs.25000* monthly to {'\n'} achieve Financial Independence
        </Text>
      </View>

      <View style={styles.simultepad}>
        <Text style={styles.simulte}>Simulate Corpus</Text>

        {/* <TextInput
           style={{
             height: 40,
             width: 200,
 
             borderColor: 'gray',
             borderWidth: 1,
           }}
           onChangeText={text => setInput(text)}
           inlineImageLeft="username"
           inlineImagePadding={2}
           underlineColorAndroid="transparent"
           value={input}
         /> */}

        <View style={styles.SectionStyle}>
          <Image
            source={require('./images/rs1.png')} //Change your icon image here
            style={styles.ImageStyle}
          />

          <TextInput
            style={{
              //flex: 1,
              height: 50,
              width: 125,
              borderColor: 'gray',
              fontSize: 21,
              //paddingTop: 15,
              // borderWidth: 1,
            }}
            // underlineColorAndroid="transparent"
            // onChangeText={sliderValue =>
            //   sliderValue.length === 0
            //     ? setSliderValue(0)
            //     : setSliderValue(parseFloat(sliderValue))
            // }

            // onChangeText={value => {
            //   console.log('onChanveText');
            //   changeAmount(parseInt(value));
            //   /*
            //   value.length === 0
            //     ? setSliderValue1(0)
            //     : setSliderValue1(parseFloat(value));
            //   setCheck(false);
            //   */
            // }}
            //value={amount.toString()}
            onChangeText={value => {
              value.length === 0
                ? setSliderValue1(0)
                : setSliderValue1(parseFloat(value));
              setCheck(false);
            }}
            value={sliderValue.toString()}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.container}>
        {/* <Text style={styles.bar}>Value of slider is : {sliderValue}</Text> */}

        {/* <Slider
          style={{width: 350}}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          // trackStyle={styles.track}
          // thumbStyle={styles.thumb}
          maximumValue={25000}
          //minimumValue={500}
          step={100}
          value={amount.length == 0 ? 0 : amount}
          //onSlidingComplete={value => setSliderValue1(value)}
          onValueChange={value => {
            console.log('Slider :: onValueChange', value, amount);
            value != amount ? changeAmount(parseInt(value)) : null;
          }}
          // onSlidingStart={() => {
          //   Keyboard.dismiss();
          //   setCheck(true);
          // }}
        /> */}
        <Slider
          style={{width: 350}}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          // trackStyle={styles.track}
          // thumbStyle={styles.thumb}
          maximumValue={25000}
          minimumValue={check ? 500 : 0}
          step={check ? 100 : 1}
          value={sliderValue1}
          onSlidingComplete={value => setSliderValue1(value)}
          onValueChange={value => setSliderValue(value)}
          onSlidingStart={() => {
            Keyboard.dismiss();
            setCheck(true);
          }}
        />
        <View style={styles.textCon}>
          <Text style={styles.colorGrey}>500</Text>
          {/* <Text style={styles.colorYellow}>{sliderValue.toString()}</Text> */}
          <Text style={styles.colorGrey}>25000</Text>
        </View>
      </View>

      {/* <View alignItems="center" w="100%">
         <Slider
           w="3/4"
           maxW="300"
           defaultValue={70}
           minValue={0}
           maxValue={100}
           accessibilityLabel="hello world"
           step={10}>
           <Slider.Track>
             <Slider.FilledTrack />
           </Slider.Track>
           <Slider.Thumb />
         </Slider>
       </View> */}

      <View style={styles.car}>
        <Text style={{textAlign: 'center', color: '#000000'}}>
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
          <Image style={styles.level} source={require('./images/Level.png')} />
          <Text style={{left: 7, fontSize: 14, color: '#000000'}}>
            We have assumed the 'Aggressive' risk{'\n'}
            profile for you in order to arrive at the {'\n'}
            above numbers.You would be able to{'\n'}
            change this in the subsequence steps {'\n'}
            before you invest.
          </Text>
        </View>
      </View>
      {/* <View style={styles.btn1}>
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
       </View> */}

      <TouchableOpacity onPress={() => alert('Nothing')} style={styles.btn}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#105099', '#0F325A']}
          style={styles.btn.linear}>
          <Text style={styles.btn.btnTxt}>GET STARTED</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Ncash_wealth;

const styles = StyleSheet.create({
  ncash: {
    height: 55,
    width: 260,
    top: 0,
  },
  invest: {
    // numberOfLines: 2,
    fontSize: 18,
    textAlign: 'center',
    // top: 30,
    // bottom: 20,
    color: '#000000',
  },
  investpad: {
    // numberOfLines: 2,
    // fontSize: 18,
    // textAlign: "center",

    top: 35,
  },
  simulte: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
    color: '#000000',
  },
  simultepad: {
    //bottom: 20,
    top: 60,
  },
  bar: {
    textAlign: 'center',
    //flex: 0.5,
    top: 50,
  },
  bar1: {
    textAlign: 'center',
    //flex: 1,
    top: 100,
    width: 350,
    height: 20,
    maxHeight: 50,
  },
  carousel: {
    flexGrow: 0,
    height: 150,
  },
  car: {
    top: 140,
    textAlign: 'center',
    flexGrow: 0,
    color: '#000000',
  },
  level: {
    height: 80,
    width: 130,
    left: -3,
  },
  btn1: {
    width: 350,
    height: 60,
    //elevation: 8,
    //backgroundColor: '#009688',

    top: 100,
    //backgroundColor: 'white',
    backgroundColor: 'black',
    borderWidth: 2,
    //borderColor: 'white',
    borderRadius: 30,
  },

  btn: {
    alignSelf: 'center',
    marginTop: 60,
    width: 350,
    height: 55,
    borderRadius: 25,
    top: 10,
    btnTxt: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      opacity: 0.8,
    },
    linear: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 55,
      alignSelf: 'center',
      borderRadius: 25,
      opacity: 0.95,
    },
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    //borderColor: 'white',
    borderWidth: 0,
    overflow: 'hidden',
    //borderColor: '#000',
    height: 45,
    borderRadius: 5,
    margin: 10,
    ShadowColor: '#f2f2f2',
    elevation: 3,

    shadowRadius: 10,
    shadowOpacity: 1,
  },
  ImageStyle: {
    padding: 10,
    paddingLeft: 10,
    margin: 10,
    height: 25,
    width: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
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
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
    top: 100,
  },
  textCon: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorGrey: {
    color: '#d3d3d3',
  },
  colorYellow: {
    color: 'rgb(252, 228, 149)',
  },
});
