import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native';
const Card = (props) =>{
  const {colors} = useTheme()
  const textColor = colors.iconColor;
 const  navigation = useNavigation();
  return(

    <TouchableOpacity onPress={()=>{
            navigation.navigate('videoPlayer',{videoId: props.videoId,title: props.title})
    }}>
    <View style={{ margin: 2, elevation: 3 , borderBottomColor: "red"}}>
    <View style={{margin: 5, marginTop: 6}}>
    <Image 
    source = {{uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
    style={{
      width: '100%',
      height: 160,
      backgroundColor: 'gray',
    }}
    />
   
    <Text style={{fontSize: 19, margin: 6,color: textColor}} ellipsizeMode="tail" 
    numberOfLines = {1} >{props.title}</Text>
    <View style={{flexDirection: 'row'}}>
    <MaterialIcons name="account-circle" color={textColor} size={29} style={{margin: 4,}} />
    <Text style={{alignSelf: 'center',color: textColor}}>{props.channel}</Text>
    </View>
    </View>
    

    </View>
    </TouchableOpacity>
  )
}
export default Card;
