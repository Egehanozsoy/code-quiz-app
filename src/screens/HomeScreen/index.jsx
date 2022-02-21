import { StatusBar } from 'expo-status-bar';
import React, { } from 'react';
import {
  FlatList, SafeAreaView, StyleSheet, View,
} from 'react-native';
import { HeaderText } from '../../components';
import { CONTENT_WIDTH, SPACING, ThemeContext } from '../../constants/theme';
import languages from '../../constants/languages';
import CategoryDisplayer from './components/CategoryDisplayer';

function HomeScreen() {
  const SeperatorComponent = React.memo(() => <View style={{ height: SPACING.medium }} />);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyContainer}>
          <ThemeContext.Consumer>
            {
              (value) => (
                <HeaderText
                  textStyle={{ color: value.theme.background }}
                >
                  Available Languages
                </HeaderText>

              )
            }

          </ThemeContext.Consumer>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={SeperatorComponent}
            style={styles.flatListStyle}
            data={languages}
            renderItem={({ item, index }) => (
              <CategoryDisplayer language={item} duration={index * 100 + 400} />
            )}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    width: CONTENT_WIDTH,
    alignSelf: 'center',
  },
  flatListStyle: {
    marginTop: SPACING.medium,
    height: '100%',
  },
});

export default HomeScreen;
