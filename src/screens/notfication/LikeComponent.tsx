import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '@assets/images';

const LikeComponent = () => {
  const renderItem = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', padding: 0, paddingVertical: 8}}>
          <Image
            source={IMAGES.user}
            style={{width: 48, height: 48, borderRadius: 32}}
          />
          <View style={{paddingHorizontal: 16, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#0B141F',
                lineHeight: 20,
              }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#8FA0B4',
                lineHeight: 20,
              }}>
              key Id
            </Text>
          </View>
        </View>
        <Image
          source={IMAGES.imageCook}
          style={{width: 48, height: 48, borderRadius: 8}}
        />
      </View>
    );
  };
  return (
    <View style={{padding: 16, flex: 1}}>
      <Text
        style={{
          fontSize: 15,
          color: '#0B141F',
          fontWeight: '500',
          lineHeight: 24,
        }}>
        Likes
      </Text>
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={index => index.toString()}
        style={{flex: 1}}
      />
    </View>
  );
};

export default LikeComponent;

const styles = StyleSheet.create({});
