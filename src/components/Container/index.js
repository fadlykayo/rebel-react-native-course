import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

const Container = props => {
  return (
    <SafeAreaView>
      <View style={props.style}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Container;
