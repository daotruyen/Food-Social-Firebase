import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ICON, IMAGES} from '@assets/images';
import ProfilePostListItem from './component/ProfilePostListItem';
import {width} from 'react-native-size-scaling';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ProfilePostComponent from './component/ProfilePostComponent';
import ProfileLikeComponent from './component/ProfileLikeComponent';
import {Tabs} from 'react-native-collapsible-tab-view';

interface IProps {}

const ProfileScreen: React.FC<IProps> = _props => {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Likes', title: 'Likes'},
    {key: 'Comment', title: 'Comment'},
  ]);

  const renderScene = SceneMap({
    Likes: ProfilePostComponent,
    Comment: ProfileLikeComponent,
  });
  const renderFollowButton = () => {
    if (true) {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.grayOutlinedButton}
            onPress={() => {}}>
            <Text style={styles.grayOutlinedButtonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.grayOutlinedIconButton}
            onPress={() => {}}>
            {/* <Feather name="user-check" size={20} /> */}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.filledButton} onPress={() => {}}>
          <Text style={styles.filledButtonText}>Follow</Text>
        </TouchableOpacity>
      );
    }
  };

  // const renderItem = () => {
  //   return (
  //     <TouchableOpacity>
  //       <Image
  //         style={styles.imageImage}
  //         source={IMAGES.demo}
  //         resizeMode={'cover'}
  //       />
  //       <View
  //         style={{
  //           position: 'absolute',
  //           bottom: 5,
  //           left: 5,
  //           flexDirection: 'row',
  //         }}>
  //         <Image source={ICON.heart} style={{width: 16, height: 16}} />
  //         <Text style={{color: '#FFF'}}>0</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
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

  const HEADER_HEIGHT = 250;

  const DATA = [0, 1, 2, 3, 4];
  const identity = (v: unknown): string => v + '';

  const Header = () => {
    return (
      <View style={styles.container}>
        <Image source={IMAGES.user} />
        <Text style={styles.emailText}>user.email</Text>
        <View style={styles.counterContainer}>
          <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>0</Text>
            <Text style={styles.counterLabelText}>Following</Text>
          </View>
          <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>0</Text>
            <Text style={styles.counterLabelText}>Followers</Text>
          </View>
          <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>0</Text>
            <Text style={styles.counterLabelText}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.grayOutlinedButton}>
          <Text style={styles.grayOutlinedButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem: ListRenderItem<number> = React.useCallback(({index}) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);
  return (
    <SafeAreaView style={styles.containerWraper}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={ICON.search} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>user.displayName</Text>
        <TouchableOpacity>
          <Image source={ICON.menu} style={styles.image} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{flex: 1}} scrollEnabled>
        <View style={styles.container}>
          <Image source={IMAGES.user} />
          <Text style={styles.emailText}>user.email</Text>
          <View style={styles.counterContainer}>
            <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Following</Text>
            </View>
            <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Followers</Text>
            </View>
            <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Likes</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.grayOutlinedButton}>
            <Text style={styles.grayOutlinedButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: width}}
            renderTabBar={renderTabBar}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  containerWraper: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 65,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  counterContainer: {
    paddingBottom: 20,
    flexDirection: 'row',
  },
  counterItemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  emailText: {
    padding: 20,
  },
  counterNumberText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  counterLabelText: {
    color: 'gray',
    fontSize: 11,
  },
  grayOutlinedButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  grayOutlinedIconButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  filledButton: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: '#ff4040',
  },
  filledButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  grayOutlinedButtonText: {
    color: 'black',
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderColor: 'lightgray',
  },
  image: {
    width: 24,
    height: 24,
  },
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

  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header2: {
    height: 250,
    width: '100%',
    backgroundColor: '#2196f3',
  },
});
