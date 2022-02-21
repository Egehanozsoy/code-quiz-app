import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../../constants/theme';

function Button({
  style, title, textStyle, onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.medium,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.white,
  },
});

export default Button;
