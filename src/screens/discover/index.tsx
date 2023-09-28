import {StyleSheet, Text, View, Image, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ICON, IMAGES} from '@assets/images';

interface IProps {}

const DiscoverScreen: React.FC<IProps> = _props => {
  const [value, setValue] = useState('');
  const renderItem = () => {
    return (
      <View style={{flexDirection: 'row', padding: 16, paddingVertical: 8}}>
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
    );
  };

  const renderItemRecent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: 16,
        }}>
        <View style={{flexDirection: 'row', padding: 16, paddingVertical: 8}}>
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
        <Image source={ICON.close} style={{width: 20, height: 20}} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <View style={styles.root}>
        <Image source={ICON.search} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
        />
      </View>
      <View>
        <FlatList
          data={[1, 2]}
          keyExtractor={item => item.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={{paddingHorizontal: 16}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#0B141F',
            lineHeight: 24,
          }}>
          Recent
        </Text>
      </View>
      <View>
        <FlatList
          data={[1, 2]}
          keyExtractor={item => item.toString()}
          renderItem={renderItemRecent}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={ICON.not_found} />
        <Text>Không có dữ liệu</Text>
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  root: {
    margin: 16,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F3',
    borderRadius: 10,
  },
  image: {margin: 16},
  input: {
    padding: 16,
    paddingLeft: 0,
  },
});
