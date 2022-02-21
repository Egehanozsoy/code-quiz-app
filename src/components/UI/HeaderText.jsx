import React from 'react';
import { StyleSheet, Text } from 'react-native';

function HeaderText({ children, textStyle }) {
  return <Text style={[styles.textStyle, textStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontFamily: 'PoppinsMedium',
  },
});

export default HeaderText;
