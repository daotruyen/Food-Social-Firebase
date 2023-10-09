import {Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, Pressable, TouchableNativeFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {selectMain} from '@reduxCore/main/slice';
import {changeLanguage} from '@utils/locales/i18n';
import {styles} from './styles';
import {ICON, IconTabBar} from '@assets/images';
import {width} from 'react-native-size-scaling';

interface IFormErrors {
  username?: string;
  password?: string;
}

interface IProps {}

const RegisterScreen: React.FC<IProps> = _props => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();
  const {locale} = useSelector(selectMain);

  useEffect(() => {
    changeLanguage(locale);
    // auth()
    //   .createUserWithEmailAndPassword(
    //     'jane.doe@example.com',
    //     'SuperSecretPassword!',
    //   )
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  }, [locale]);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Image source={ICON.back} />
        <Image source={ICON.question} />
      </View>
      <View style={{alignItems: 'center', paddingTop: 40}}>
        <Text
          style={{
            color: 'rgba(22, 24, 35, 1)',
            fontSize: 24,
            fontWeight: '700',
          }}>
          Đăng nhập
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.56)',
            fontSize: 15,
            marginTop: 12,
            marginBottom: 32,
          }}>
          Quản lý tài khoản, kiểm tra thông báo, bình luận, v.v
        </Text>
        <View>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderColor: 'rgba(22, 24, 35, .12)',
              borderRadius: 8,
              width: width - 48,
            }}>
            <Image
              source={IconTabBar.profile}
              style={{position: 'absolute', left: 12}}
            />
            <Text style={{textAlign: 'center', padding: 5}}>
              Số điện thoại/ Email
            </Text>
          </Pressable>
        </View>
        <View>
          <Text>
            Bằng cách tiếp tục, bạn đồng ý với Điều khoản dịch vụ của chúng tôi
            và thừa nhận rằng bạn đã đọc Chính sách Quyền riêng tư để tìm hiểu
            cách chúng tôi thu thập, sử dụng và chia sẻ dữ liệu của bạn
          </Text>
        </View>
        <View>
          <Text>
            Bạn không có tài khoản?{' '}
            <TouchableNativeFeedback>
              <Text style={{color: 'rgba(254, 44, 85, 1)'}}>Đăng ký</Text>
            </TouchableNativeFeedback>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
