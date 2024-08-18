import React from "react";
import { Provider } from "react-redux";
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator'; // Import your DrawerNavigator

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator /> {/* Use the DrawerNavigator here */}
      </NavigationContainer>
    </Provider>
  );
}
