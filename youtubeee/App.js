import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './components/screens/Home';
import SearchScreen from './components/screens/SearchScreen';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore ,combineReducers } from 'redux';
import { Provider,useSelector} from 'react-redux';
import VideoPlayer from './components/screens/VideoPlayer';
import ExploreScreen from './components/screens/ExploreScreen';
import Subscribe from './components/screens/SubscribeScreen';
import { reducer } from './reducers/Reducer';
import {themeReducer} from './reducers/themeReducer'
const rootReducer = combineReducers({
  cardData: reducer,//[]
  myDarkMode: themeReducer,
  
});
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const store = createStore(rootReducer);


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor:"white",
    tabIcon: "white",
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor:"black",
    tabIcon: "red",
  }
}

const RootHome = () => {
  const {colors}=useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Explore') {
            iconName = 'md-compass';
          } else if (route.name === 'Subscibe')
            return (
              <MaterialIcons name="subscriptions" size={size} color={color} />
            );

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Subscibe" component={Subscribe} />
    </Tab.Navigator>
  );
};
export default function App()
{
  return(
    <Provider store={store}>
    <Navigations/>
    </Provider>
  )
}

export function Navigations (){
let currentTheme = useSelector(state=>{
 return state.myDarkMode
})
 
    return (
    
        <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="RootHome" component={RootHome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="videoPlayer" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
     
    );
  }

