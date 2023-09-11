import {FlatList, Text} from '@components';
import React, {useCallback, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  ImageSourcePropType,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
// import {Image} from 'react-native-element-image';
// import {height, scale} from 'react-native-size-scaling';
import {styles} from './styles';
// import FlatListComponent from '@components/FlatList';
import {ICON, IMAGES} from '@assets/images';

const {width, height} = Dimensions.get('window');

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface IProps {}

const HomeScreen: React.FC<IProps> = _props => {
  const refFLHorizontal = useRef();
  const [total, setTotal] = useState(20);
  const [activeDot, setActiveDot] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [lastTapTime, setLastTapTime] = useState(0);

  const numberOfVisibleDots = 5;

  const handleScroll = event => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const widthX = width - 10;
    const activeIndex = Math.floor(xOffset / widthX);

    setActiveDot(activeIndex);
  };

  const handleItemPress = item => {
    const currentTime = Date.now();
    const delta = currentTime - lastTapTime;

    if (delta < 300) {
      // If the time between taps is less than 300ms, consider it a double-tap
      handleDoubleTap(item);
    } else {
      // Otherwise, treat it as a single tap
      // handleSingleTap(item);
    }

    setLastTapTime(currentTime);
  };

  const handleDoubleTap = item => {
    // Handle double-tap action for the item
    console.log('Double-tap on item:', item);
  };

  const renderPagination = () => {
    const totalImages = images.length;
    const start = Math.max(0, activeDot - Math.floor(numberOfVisibleDots / 2));
    const end = Math.min(totalImages, start + numberOfVisibleDots);
    // By default, dots only show when `total` >= 2
    if (total <= 1) {
      return null;
    }

    let dots = [];
    const ActiveDot = (
      <View
        style={[
          {
            backgroundColor: '#007aff',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          },
        ]}
      />
    );
    const Dot = (
      <View
        style={[
          {
            backgroundColor: '#fff',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          },
        ]}
      />
    );
    for (let i = start; i < end; i++) {
      dots.push(
        i === activeDot
          ? React.cloneElement(ActiveDot, {key: i})
          : React.cloneElement(Dot, {key: i}),
      );
    }

    return (
      <View pointerEvents="none" style={styles.pagination_y}>
        {dots}
      </View>
    );
  };

  const renderItemHorizontal = ({item}: any) => {
    return (
      <View
        style={{
          flex: 1,
          height: Platform.OS === 'ios' ? height : height,
        }}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 0,
            top: height - 230,
            zIndex: 1,
          }}>
          {renderPagination()}
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <View
                style={{
                  marginHorizontal: 7,
                }}>
                <Image source={ICON.avatar} />
                <Image
                  source={ICON.subscribe}
                  style={{
                    position: 'absolute',
                    alignItems: 'center',
                    bottom: -10,
                    left: 15,
                  }}
                />
              </View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  marginHorizontal: 0,
                  lineHeight: 24,
                  fontWeight: '600',
                }}>
                @name
              </Text>
            </View>

            <Text style={{color: '#fff', fontSize: 16, margin: 11}}>
              Dont know how to finish this tiktok
              {images.map(() => {
                return (
                  <Text style={{color: '#fff', fontSize: 16, margin: 11}}>
                    {' '}
                    #hashtag
                  </Text>
                );
              })}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              margin: 26,
            }}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 7,
                marginBottom: 20,
                flexDirection: 'row',
              }}>
              <Image
                source={ICON.heart}
                style={{width: 24, height: 24, margin: 5}}
              />
              <Text style={[styles.text, {fontSize: 13, paddingVertical: 0}]}>
                0
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 7,
                marginBottom: 20,
                flexDirection: 'row',
              }}>
              <Image
                source={ICON.comment}
                style={{width: 24, height: 24, margin: 5}}
              />
              <Text style={[styles.text, {fontSize: 13, paddingVertical: 0}]}>
                0
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 12,
                marginBottom: 25,
                flexDirection: 'row',
              }}>
              <Image
                source={ICON.share}
                style={{width: 24, height: 24, margin: 5}}
              />
              <Text style={[styles.text, {fontSize: 13, paddingVertical: 0}]}>
                0
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 7,
                marginBottom: 25,
                flexDirection: 'row',
              }}>
              <Image
                source={ICON.share}
                style={{width: 24, height: 24, margin: 5}}
              />
              <Text style={[styles.text, {fontSize: 13, paddingVertical: 0}]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          ref={refFLHorizontal}
          onScroll={event => handleScroll(event)}
          data={images}
          renderItem={renderItem}
          pagingEnabled
          horizontal
          style={{flex: 1}}
        />
      </View>
    );
  };

  const renderItem = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => handleItemPress(1)}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            height: Platform.OS === 'ios' ? height : height,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={[styles.img, {width: width, height: height}]}
            source={IMAGES.demo}
            resizeMode="cover"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const onActiveTab = (index: number) => {
    console.log(index);
    setActiveTab(index);
  };

  const onFlatListScroll = useCallback(({viewableItems}: any) => {
    if (viewableItems.length === 1) {
      // setCurrentSectionIndex(viewableItems[0].index);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Pressable
            style={[styles.button, {flexDirection: 'row'}]}
            onPress={() => onActiveTab(0)}>
            <Text
              style={[
                styles.text,
                activeTab === 0 && {color: 'rgba(255, 255, 255, 1))'},
              ]}>
              Following
            </Text>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#FE2C55',
                borderRadius: 8,
                position: 'absolute',
                top: 15,
                right: 5,
              }}
            />
          </Pressable>
          <View
            style={{
              height: 24,
              width: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.25))',
              alignSelf: 'center',
            }}
          />
          <Pressable style={styles.button} onPress={() => onActiveTab(1)}>
            <Text
              style={[
                styles.text,
                activeTab === 1 && {color: 'rgba(255, 255, 255, 1))'},
              ]}>
              For You
            </Text>
          </Pressable>
        </View>
        <FlatList
          keyExtractor={item => item.toString()}
          data={images}
          viewabilityConfig={{itemVisiblePercentThreshold: 90}}
          renderItem={renderItemHorizontal}
          keyExtractorField={''}
          pagingEnabled={true}
          snapToAlignment={'start'}
          snapToInterval={height}
          decelerationRate="normal"
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          style={{flex: 1}}
          disableIntervalMomentum={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
