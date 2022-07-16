import {Row} from 'native-base';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {amount} from './Ncash_wealth';
// import { SimplePaginationDot } from "./component";

const {width: windowWidth} = Dimensions.get('window');

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          {/* <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View> */}
          <View style={styles.lowerContainer}>
            <Text style={styles.titleText}>{title} Years</Text>
            <Text style={styles.contentText}>
              Avg of {title} Years
              {'\n'}
              {content}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  const data = [
    {
      uri: 'https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 3,
      content: 3 * 12 * props.amount,
    },
    {
      uri: 'https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 5,
      content: 5 * 12 * props.amount,
    },
    {
      uri: 'https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 7,
      content: 7 * 12 * props.amount,
    },
  ];

  return (
    <>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      {/* <SimplePaginationDot currentIndex={currentIndex} length={data.length} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#141518",
    paddingVertical: 5,
  },
  carousel: {
    // backgroundColor: "#141518",
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    //borderWidth: 2,
    backgroundColor: 'white',
    //flex: 0.5,
    //borderRadius: 5,
    //borderColor: "white",
    // elevation: 3,
  },
  imageBackground: {
    flex: 0,
    height: 150,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  // rightTextContainer: {
  //   marginLeft: 'auto',
  //   marginRight: -2,
  //   backgroundColor: 'rgba(49, 49, 51,0.5)',
  //   padding: 3,
  //   marginTop: 3,
  //   borderTopLeftRadius: 5,
  //   borderBottomLeftRadius: 5,
  // },
  // rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    // alignContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    //alignContent: 'flex-start',
  },
  contentText: {
    marginTop: 0,
    fontSize: 18,
    alignContent: 'space-between',
    marginLeft: 70,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
