import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList, SafeAreaView, StyleSheet, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, HeaderText } from '../../components';
import { CONTENT_WIDTH, SPACING } from '../../constants/theme';
import IntroductionDisplayer from './components/IntroductionDisplayer';
import { authenticate } from '../../redux/auth/actions';

const introduction1 = require('../../../assets/lottie/introduction-1.json');
const introduction2 = require('../../../assets/lottie/introduction-2.json');
const introduction3 = require('../../../assets/lottie/introduction-3.json');

const introductions = [
  {
    animation: introduction1,
    description: 'Answer various questions about your favourite programming language',
  },
  {
    animation: introduction2,
    description: 'Track your progress and how well you do compared to other developers!',
  },
  {
    animation: introduction3,
    description: 'Get Started With Code Quiz App!',
  },
];

function IntroScreen() {
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleLogin = () => {
    dispatch(authenticate());
  };

  const handleNextPress = () => {
    if (currentIndex === introductions.length - 1) {
      handleLogin();
      return;
    }

    setCurrentIndex((pre) => pre + 1);
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
    });
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderText
        textStyle={{
          marginTop: SPACING.medium,
        }}
      >
        Code Quiz App
      </HeaderText>

      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled={false}
        style={styles.scrollStyle}
        pagingEnabled
        contentContainerStyle={styles.contentContainerStyle}
        data={introductions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <IntroductionDisplayer animation={item.animation} description={item.description} />
        )}
      />

      <View style={{ height: 100, width: CONTENT_WIDTH }}>
        <Button onPress={handleNextPress} title="Next" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollStyle: {},
  contentContainerStyle: {
    alignItems: 'center',
  },
});

export default IntroScreen;
