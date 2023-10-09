import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ICON, IMAGES} from '@assets/images';
import {width} from 'react-native-size-scaling';

const ProfilePostListItem = props => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.imageImage}
        source={IMAGES.demo}
        resizeMode={'cover'}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          left: 5,
          flexDirection: 'row',
        }}>
        <Image source={ICON.heart} style={{width: 16, height: 16}} />
        <Text style={{color: '#FFF'}}>0</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePostListItem;

const styles = StyleSheet.create({
  imageImage: {height: 200, width: width / 3},
});
