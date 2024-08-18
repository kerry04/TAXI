// components/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen'
import ReceiptScreen from '../screens/ReceiptScreen'
import HistoryScreen from '../screens/HistoryScreen'
import PaymentScreen from '../screens/PaymentScreen'
import SupportScreen from '../screens/SupportScreen'

import CustomDrawerContent from './ CustomDrawerContent'

const Drawer = createDrawerNavigator();

const DrawerNavigator= ()=>{
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Catch a ride" component={MapScreen} />
      <Drawer.Screen name="Parcel Delivery" component={MapScreen} />
      <Drawer.Screen name="Receipts" component={ReceiptScreen} />
      <Drawer.Screen name="Travel History" component={HistoryScreen} />
      <Drawer.Screen name="Payment" component={PaymentScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
