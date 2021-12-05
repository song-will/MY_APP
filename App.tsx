/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowContent from './src/ShowContent'
import ChooseContent from './src/ChooseContent'
import Gyroscope from './src/Gyroscope'

interface Navigation {
  navigate: (name: string) => void
}

interface Props {
  navigation:Navigation
}

const HomeScreen: React.FC<Props> = (props) => {
  console.log('home', props)
  return (
    <View style={{ flex: 1}}>
        <ChooseContent navigation={props.navigation} />
        {/* <Button title="start" onPress={() => props.navigation.navigate('ShowContent')} /> */}
    </View>
  )
}

const Stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: '你说我菜'}} />
          <Stack.Screen name="ShowContent" component={ShowContent} />
          <Stack.Screen name="ChooseContent" component={ChooseContent} />
          <Stack.Screen name="Gyroscope" component={Gyroscope} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
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
});

export default App;
