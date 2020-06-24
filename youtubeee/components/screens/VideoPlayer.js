import React from 'react';
import {View,Text,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

import Constants from 'expo-constants';
const VideoPlayer =({route})=>{
  const {videoId,title} = route.params
  return(
<View style={{flex:1,
marginTop: Constants.statusBarHeight,
}}>
<View style={{
  width: '100%',
  height: 300,

}}>
<WebView 
   source= {{uri:`https://www.youtube.com/embed/${videoId}`}}
    javaScriptEnabled={true}
    domStorageEnabled={true}
  />
  </View>
  <Text style={{fontSize:20,width:Dimensions.get('screen').width-50,margin: 10}}
  numberOfLines= {2}
  ellipsizeMode= "tail"
  >{title}</Text>
  <View style={{borderBottomWidth: 1}}/>
</View>
  )
}
export default VideoPlayer;