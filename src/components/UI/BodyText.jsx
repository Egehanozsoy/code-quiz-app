import React from 'react';
import { StyleSheet, Text } from 'react-native';

function BodyText({ children, textStyle }) {
  return <Text style={[styles.textStyle, textStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
  },
});

export default BodyText;
