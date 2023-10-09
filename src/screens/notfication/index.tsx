import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LikeComponent from './component/LikeComponent';
import CommentComponent from './component/CommentComponent';

interface IProps {}

const NotificationScreen: React.FC<IProps> = _props => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Likes', title: 'Likes'},
    {key: 'Comment', title: 'Comment'},
  ]);

  const renderScene = SceneMap({
    Likes: LikeComponent,
    Comment: CommentComponent,
  });

  const renderTabBar = (_props: any) => {
    return (
      <TabBar
        {..._props}
        scrollEnabled
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBarStyle}
        tabStyle={{width: Dimensions.get('window').width / 2}}
        renderLabel={({route, focused}) => {
          return (
            <Text
              style={{
                fontSize: 15,
                color: focused ? 'red' : '#0B141F',
                fontWeight: '500',
                lineHeight: 24,
              }}>
              {route.title}
            </Text>
          );
        }}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderColor: '#F3F5F9',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 24,
            color: '#0B141F',
          }}>
          Thông báo
        </Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    elevation: 5,
  },
  indicatorStyle: {
    backgroundColor: '#FFF',
    height: 2,
  },
});
