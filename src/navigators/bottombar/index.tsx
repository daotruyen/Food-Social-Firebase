import {Image, Pressable, View, Text} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home';
import {IconTabBar} from '@assets/images';
import DiscoverScreen from '@screens/discover';
import NotificationScreen from '@screens/notfication';
import ProfileScreen from '@screens/profile';
import UploadImageScreen from '@screens/uploadImage';
const MainBottomTab = createBottomTabNavigator();

const tabBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [colorTab, setColorTab] = useState(0);
  const TabArr = [
    {
      route: 'HomeScreen',
      label: 'Home',
      activeIcon: IconTabBar.home_active,
      inActiveIcon: IconTabBar.home,
      component: HomeScreen,
    },
    {
      route: 'DiscoverScreen',
      label: 'Discover',
      activeIcon: IconTabBar.discover_active,
      inActiveIcon: IconTabBar.discover,
      component: DiscoverScreen,
    },
    {
      route: 'UploadImage',
      label: '',
      type: Ionicons,
      activeIcon: IconTabBar.photo,
      inActiveIcon: IconTabBar.photo,
      component: UploadImageScreen,
    },
    {
      route: 'NotificationScreen',
      label: 'Notification',
      activeIcon: IconTabBar.noti_active,
      inActiveIcon: IconTabBar.noti,
      component: NotificationScreen,
    },
    {
      route: 'Profile',
      label: 'Profile',
      type: Ionicons,
      activeIcon: IconTabBar.profile_active,
      inActiveIcon: IconTabBar.profile,
      component: ProfileScreen,
    },
  ];

  const TabButton = props => {
    const {item, onPress, accessibilityState} = props;
    console.log(props);
    const focused = accessibilityState.selected;
    const onPressIcon = () => {
      onPress();
      if (item.route !== 'HomeScreen') {
        setColorTab(1);
      } else {
        setColorTab(0);
      }
    };

    return (
      <Pressable
        onPress={onPressIcon}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={focused ? item.activeIcon : item.inActiveIcon}
            style={{width: 32, height: 32}}
          />
          <Text
            style={{
              color: focused
                ? colorTab === 1
                  ? '#000'
                  : '#FFF'
                : colorTab === 1
                ? 'rgba(138, 139, 143, 1)'
                : 'rgba(255, 255, 255, 0.75)',
              textAlign: 'center',
              fontSize: 10,
              fontWeight: '600',
              lineHeight: 12,
            }}>
            {item.label}
          </Text>
        </View>
      </Pressable>
    );
  };
  console.log('render');
  return (
    <MainBottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colorTab === 0 ? '#000' : '#FFF',
          height: 60,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      {TabArr.map((item, index) => {
        return (
          <MainBottomTab.Screen
            name={item.route}
            key={index + 'tab'}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </MainBottomTab.Navigator>
  );
};

export default tabBar;
