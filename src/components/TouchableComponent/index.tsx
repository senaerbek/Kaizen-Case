import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

export function TouchableComponent({children, ...props}) {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity {...props}>{children}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#e3e6e8', false)}
      useForeground={true}
      {...props}>
      <View onStartShouldSetResponder={() => true}>{children}</View>
    </TouchableNativeFeedback>
  );
}
