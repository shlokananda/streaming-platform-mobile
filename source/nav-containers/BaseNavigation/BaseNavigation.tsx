import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeView from '../../views/HomeView/HomeView';
import ComponentsView from '../../views/ComponentsView/ComponentsView';
import Icon from '../../components/CustomIcon/Icon';
import ComingSoonView from '../../views/ComingSoonView/ComingSoonView';

const Tab = createMaterialBottomTabNavigator();

function BaseNavigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator activeColor="#3A7CE6" inactiveColor="#808080" barStyle={{ backgroundColor: '#F0F0F0', shadowColor: "" }}>
          <Tab.Screen name="Browse" component={HomeView} options={{ tabBarIcon: (params) => <Icon size={18} color={params.color} name="explore" /> }} />
          <Tab.Screen name="Library" component={ComingSoonView} options={{ tabBarIcon: (params) => <Icon size={18} color={params.color} name="library_music" /> }} />
          <Tab.Screen name="User" component={ComingSoonView} options={{ tabBarIcon: (params) => <Icon size={18} color={params.color} name="user-circle" /> }} />
          <Tab.Screen name="Components" component={ComponentsView} options={{ tabBarIcon: (params) => <Icon size={18} color={params.color} name="more-vertical" /> }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default BaseNavigation
