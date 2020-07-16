import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {SvgElement} from './src/commonComponents/svgElement';

import Dashboard from './src/pages/dashboard/dashboard';
import Medication from './src/pages/medication/medication';
import MedicationDetails from './src/pages/medication/medicationDetails';
import Calendar from './src/pages/calendar/calendar';
import HeaderButton from './src/commonComponents/headerButton';



const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
  return (
      <DashboardStack.Navigator>
        <DashboardStack.Screen name="Dashboard" component={Dashboard} options={{
              headerLeft: () => (
                  <HeaderButton />
              ),
        }}/>
      </DashboardStack.Navigator>
  );
}


const MedicationStack = createStackNavigator();

function MedicationStackScreen() {
  return (
      <MedicationStack.Navigator>
        <MedicationStack.Screen name="Medication" component={Medication} options={{
              headerLeft: () => (
                  <HeaderButton />
              ),
        }} />
        <MedicationStack.Screen name="MedicationDetails" component={MedicationDetails} />
      </MedicationStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();

function CalendarStackScreen() {
  return (
      <CalendarStack.Navigator>
        <CalendarStack.Screen name="Calendar" component={Calendar} options={{
              headerLeft: () => (
                  <HeaderButton />
              ),
        }} />
      </CalendarStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
                          switch(route.name) {
                                case 'Dashboard':
                                      iconName = 'Home';
                                      break;
                                case 'Medication':
                                      iconName = 'Medication';
                                      break;
                                case 'Calendar':
                                      iconName = 'Calendar';
                                      break;
                                default :
                                      iconName = 'Home';
                                      break;
                          }

                          return <SvgElement name={iconName} height={size} width={size} fill={color} />;
                    },
              })}
              tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
              }}>
            <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
            <Tab.Screen name="Medication" component={MedicationStackScreen} />
            <Tab.Screen name="Calendar" component={CalendarStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}
