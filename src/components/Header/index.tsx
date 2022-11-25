import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';

export function Header() {
  return (
    <View style={Styles.container}>
      <View style={Styles.left}>
        <Image
          style={Styles.logo}
          source={require('./images/dahadaha.png')}
          resizeMode={'contain'}
        />
      </View>
      <View style={Styles.middle}>
        <TouchableOpacity>
          <View style={Styles.loginButton}>
            <Text style={Styles.loginButtonText}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.right}>
        <View style={Styles.userIconView}>
          <Image
            style={Styles.userIcon}
            source={require('./images/user.png')}
          />
        </View>
      </View>
    </View>
  );
}
