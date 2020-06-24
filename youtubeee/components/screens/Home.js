import React from 'react';
import {StyleSheet, View,Text,ScrollView,FlatList} from 'react-native';
import Header from '../Header'
import Card from '../Card';
import {useSelector} from 'react-redux';
const Home=({navigation})=> {
const cardData = useSelector(state=>{
  return state.cardData;
})

return(
  <View style={{flex:1}}>
  <View style={{flexDirection: 'row'}}>
  <Header/> 
  </View>
  <FlatList
    keyExtractor={(item)=>{
       item.id.videoId
     }}
  data = {cardData}
  renderItem={({item})=>{
    return <Card videoId={item.id.videoId}
       title={item.snippet.title}
       channel= {item.snippet.channelTitle}/>
  }}
  />
 </View>
)
}

export default Home;
