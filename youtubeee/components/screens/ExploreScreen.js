import React from 'react';
import {View,Text,FlatList,ScrollView} from 'react-native';
import Header from '../Header'; 
import Card from '../Card';

import {useSelector} from 'react-redux';
const LittleCards = ({name})=>{
  return(
    <View style={{
      backgroundColor: 'red',
      width: 160,
      height: 50,
      margin: 6,
      borderRadius: 10
    }}>
    <Text style={{textAlign:'center',
                 color: 'white',
                 fontSize: 22,

    }}>{name}</Text>

    </View>
  )
}

const Explore =()=>{
  const cardData = useSelector(state=>{
    return state.cardData;
  })
  return(
<View style={{flex:1}}>
<View style={{flexDirection: 'row'}}>
<Header/>
</View>
<ScrollView>
<View style={{flexDirection: 'row', flexWrap:'wrap'}}>

<LittleCards name="Gaming"/>
<LittleCards name="Trending"/>
<LittleCards name="Music"/>
<LittleCards name="News"/>
<LittleCards name="Movies"/>
<LittleCards name="Fashion"/>
</View>
  <Text style={{margin:8,fontSize:22,borderWidth:1}}>Trending Videos </Text>
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
  </ScrollView>
</View>
  )
}
export default Explore;