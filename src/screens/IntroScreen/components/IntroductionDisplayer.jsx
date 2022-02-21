import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import propTypes from 'prop-types';
import { CONTENT_WIDTH, SCREEN_WIDTH, SPACING } from '../../../constants/theme';
import { BodyText } from '../../../components';

function IntroductionDisplayer({ animation, description }) {
  return (
    <View style={styles.scrollPageContainer}>
      <View style={styles.scrollPageBodyContainer}>
        <View style={{ marginTop: '15%', padding: SPACING.small, alignItems: 'center' }}>
          <LottieView
            loop
            autoPlay
            style={{ width: CONTENT_WIDTH / 1.5, height: CONTENT_WIDTH / 1.5, alignSelf: 'center' }}
            source={animation}
          />
          <BodyText textStyle={{ textAlign: 'center', marginTop: SPACING.small }}>
            {description}
          </BodyText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollPageContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  scrollPageBodyContainer: {
    width: CONTENT_WIDTH,
    height: '100%',
  },
});

IntroductionDisplayer.propTypes = {
  animation: propTypes.any.isRequired,
  description: propTypes.string.isRequired,
};

export default IntroductionDisplayer;
