import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfilePostListItem from './ProfilePostListItem';

const ProfilePostComponent = () => {
  return (
    <View style={{}}>
      <FlatList
        numColumns={3}
        nestedScrollEnabled
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 8, 9]}
        keyExtractor={item => item.toString()}
        renderItem={item => <ProfilePostListItem item={item} />}
        style={{}}
        contentContainerStyle={{}}
      />
    </View>
  );
};

export default ProfilePostComponent;

const styles = StyleSheet.create({});
