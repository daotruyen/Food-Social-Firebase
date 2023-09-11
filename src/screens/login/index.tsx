import {Button, globalLoading, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import {useDispatch, useSelector} from 'react-redux';

import SelectLocalComponent from '@components/SelectLocal';
import {changeLanguageAction, selectMain} from '@reduxCore/main/slice';
import {changeLanguage, t} from '@utils/locales/i18n';
import {styles} from './styles';
import {IMAGES} from '@assets/images';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

interface IFormErrors {
  username?: string;
  password?: string;
}

interface IProps {}

const RegisterScrenn: React.FC<IProps> = _props => {
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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: values => {
      const error: IFormErrors = {};
      if (values.username.length === 0) {
        error.username = t('errors:usernameMessage');
      }

      if (values.password.length === 0) {
        error.password = t('errors:passwordMessage');
      }

      return error;
    },
    onSubmit: _values => {
      globalLoading.show();
      setTimeout(() => {
        globalLoading.hide();
        navigate('Main');
      }, 1000);
    },
  });

  const onChangeLanguage = (lang: 'vi' | 'en') => {
    changeLanguage(lang);
    dispatch(changeLanguageAction(lang));
  };

  return (
    <View style={styles.container}>
      <View />
    </View>
  );
};

export default RegisterScrenn;
