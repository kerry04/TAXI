import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const data = [
  { id: "1", title: "Catch a ride", image: require('../assets/taxi.png'), screen: "MapScreen" },
  { id: "2", title: "Parcel delivery", image: require('../assets/parcel.png'), screen: "MapScreen" },
  { id: "3", title: "Receipts", image: require('../assets/receipt.png'), screen: "Receipts" },
  { id: "4", title: "Travel history", image: require('../assets/history.png'), screen: "TravelHistory" },
  { id: "5", title: "Support", image: require('../assets/phone.png'), screen: "ContactUs" },
  { id: "6", title: "Payment", image: require('../assets/dola.png'), screen: "PaymentOption" },
];

const CustomDrawerContent = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarWidth = isCollapsed ? 60 : 250;
  const animation = new Animated.Value(sidebarWidth);

  const toggleSidebar = () => {
    Animated.timing(animation, {
      toValue: isCollapsed ? 250 : 60,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Animated.View style={[{ width: animation }, { backgroundColor: '#2d3748', height: '100%' }]}>
      <DrawerContentScrollView {...props} style={{ padding: 16 }}>
        {/* Toggle Button */}
        <TouchableOpacity onPress={toggleSidebar} style={{ marginBottom: 16 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>
            {isCollapsed ? '>' : '<'}
          </Text>
        </TouchableOpacity>

    
        {data.map((item) => (
          <DrawerItem
            key={item.id}
            label={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Image (Icon/Logo) */}
                <Image
                  source={item.image}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
               
                {!isCollapsed && (
                  <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 16 }}>
                    {item.title}
                  </Text>
                )}
              </View>
            )}
            onPress={() => props.navigation.navigate(item.screen)}
          />
        ))}
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default CustomDrawerContent;
