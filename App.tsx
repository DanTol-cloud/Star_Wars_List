import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/store';
import CharactersList from './src/pages/CharactersListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersDetailsScreen from './src/pages/CharactersDetailsScreen';

const Stack = createNativeStackNavigator();

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Fans'} component={CharactersList} />
          <Stack.Screen name={'Details'} component={CharactersDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
