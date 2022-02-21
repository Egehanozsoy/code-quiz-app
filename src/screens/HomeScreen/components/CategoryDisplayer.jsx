import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';
import { BodyText } from '../../../components';
import {
  COLORS, CONTENT_WIDTH, roundedSmall, SCREEN_WIDTH, SPACING,
} from '../../../constants/theme';

function CategoryDisplayer({ language, duration }) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <MotiView
        from={{
          translateX: -SCREEN_WIDTH,
          opacity: 0.5,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration,
        }}
        style={styles.container}
      >
        <Image style={styles.imageStyle} source={language.thumbnail} />
        <BodyText>{language.name}</BodyText>
      </MotiView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: roundedSmall,
    width: CONTENT_WIDTH,
    backgroundColor: COLORS.lightGrey,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: SPACING.mSmall,
  },
  imageStyle: {
    width: 35,
    height: 35,
    position: 'absolute',
    borderRadius: roundedSmall,
    left: SPACING.small,
  },
});
export default CategoryDisplayer;
