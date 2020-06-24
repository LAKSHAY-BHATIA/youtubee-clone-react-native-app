import React from 'react';
import {StyleSHeet,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from '@react-navigation/native';
const MiniCard=(props)=>{
   const  navigation = useNavigation();
   const {colors} = useTheme()
   const textColor = colors.iconColor
  console.log(props)
  return(
    <TouchableOpacity onPress={()=>{
            navigation.navigate('videoPlayer',{videoId: props.videoId,title: props.title})
    }}>
    <View style={{
      flexDirection: 'row',
      flex:1,
      marginTop: 5,
      margin: 10,
    }}>
    <Image 
    source = {{uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
    style={{
      width: '45%',
      height: 100,
     margin: 2,
    }}
    />
    <View>
    <Text ellipsizeMode= "tail" numberOfLines={3} style={{
      fontSize: 15,
      color: textColor,
      width: Dimensions.get('screen').width/2
    }}>{props.title} </Text>
    <Text style={{fontSize: 12,color: textColor}}>{props.channel}</Text>
    </View>
    </View>
    </TouchableOpacity>
  )
}
export default MiniCard;