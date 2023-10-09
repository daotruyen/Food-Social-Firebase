import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfilePostListItem from './ProfilePostListItem';

const ProfileLikeComponent = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        numColumns={3}
        nestedScrollEnabled
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 8, 9]}
        keyExtractor={item => item.toString()}
        renderItem={item => <ProfilePostListItem item={item} />}
        style={{flex: 1}}
        contentContainerStyle={{flex: 1}}
      />
    </View>
  );
};

export default ProfileLikeComponent;

const styles = StyleSheet.create({});
