import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput,ScrollView,FlatList,ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import MiniCard from '../MiniCard';
import { Ionicons } from '@expo/vector-icons';
import {useSelector,useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]



const SearchScreen = ({navigation}) => {
  const  {colors} = useTheme()
  const myColor = colors.iconColor
  const [value, setValue] = useState('');
  //const [minicardData,setMiniCardData] = useState([]) 
  const [loading,setLoading] = useState(false)
 const miniCardData = useSelector(state=>{
    return state.cardData;
  })
  const dispatch = useDispatch()
  const fetchData=()=>{
    setLoading(true)
          fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=`).then(res=>{
            return res.json()
          }).then(data=> {
            console.log(data.items)
         // setMiniCardData(data.items)
          dispatch({type: 'add',payload: data.items})
          setLoading(false)
          }).catch(err=>{
            console.log(err)
          })
  }
  
  return (
    <View>
    <View
      style={{
        padding: 5,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
        justifyContent: 'space-around',
        elevation: 2,
        backgroundColor: colors.headerColor
      }}>
      <Ionicons 
      style={{color: myColor}}
      name="md-arrow-back" size={27} onPress={()=>{
       navigation.goBack()
      }}/>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={{ height: 35, width: '70%',backgroundColor: '#e6e6e6' }}
      />
      <Ionicons
      style={{color: myColor}}
       name="md-send" size={32} onPress={()=> fetchData()
     
      } />
</View>
     {loading?<ActivityIndicator size="large" color="red" style={{marginTop: 10}}/>:null}
     <FlatList
     keyExtractor={(item)=>{
       item.id.videoId
     }}
     data = {miniCardData}
     renderItem={({item})=>{
       return <MiniCard videoId={item.id.videoId}
       title={item.snippet.title}
       channel= {item.snippet.channelTitle}
       />
     }}
     
     
     />
     

    </View>
  );
};

export default SearchScreen;
