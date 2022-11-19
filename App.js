import React from 'react';
import Home from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import InputScreen from './src/screens/InputScreen';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import {StatusBar} from 'react-native';
import {colors} from './src/assets/colors';
import UpdateScreen from './src/screens/UpdateScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={configureStore}>
      <StatusBar
        animated={true}
        backgroundColor={colors.background}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
