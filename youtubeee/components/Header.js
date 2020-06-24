import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Constants from 'expo-constants';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';
const Header = ()=>{
  const currentTheme = useSelector(state=>{
    return state.myDarkMode
  })
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const  {colors} = useTheme()
  const myColor = colors.iconColor
return(
  <View style={[Styles.container,{ backgroundColor: colors.headerColor}]}>
  <View style={{flexDirection: 'row' , }}>
      <Entypo name="youtube" size={37} color= "red"  style={{margin: 4}}/>
      <Text style={{fontSize: 23, fontWeight: 'bold',marginTop: 4,color: myColor}}> Youtubee </Text>
   </View>   
<View style={{flexDirection: 'row'}}>
  <Entypo name="video-camera" size={27} color={myColor} style={{margin: 8}} />
   <Ionicons name="md-search" size={27} color={myColor} style={{margin: 8}} onPress={()=>{
     navigation.navigate('Search');
   }}/>
    <MaterialIcons name="account-circle" size={27} color={myColor} style={{margin: 8}} onPress={()=>dispatch({type:'change_theme',payload: !currentTheme})
    }
    />
</View>
</View>
  
)
}


const Styles = StyleSheet.create({
  container:{
    flex:1,
    height: 45,
    marginTop: Constants.statusBarHeight,
   justifyContent: 'space-between',
   flexDirection: 'row',

  }
})

export default Header;