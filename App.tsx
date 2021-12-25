/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  PlatformColor,
  Button,
  ActivityIndicator,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles(isDarkMode).sectionContainer}>
      <Text
        style={[
          styles(isDarkMode).sectionTitle,
          {
            color: isDarkMode ? Colors.light : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles(isDarkMode).sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles().center}>
          <ActivityIndicator />
          <Text style={styles(isDarkMode).label}>Antal gange: {count}</Text>
          <Button onPress={() => setCount(count + 1)} title="Klik mig!" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = (isDarkMode: boolean = false) =>
  StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      padding: 16,
      ...Platform.select({
        ios: {
          color: PlatformColor('label'),
          backgroundColor: PlatformColor('systemTealColor'),
        },
        android: {
          color: PlatformColor('?android:attr/textColor'),
          backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
        },
        default: {color: 'black'},
      }),
    },
  });

export default App;
