import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

export default function UserInfo(props) {
  return (
    <View><View style={styles.container}>
    <View style={styles.profile}>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
</View>      
<View style={styles.content}>
     
     <Text>
       Grateful for the chance to explore, unwind, and create unforgettable moments that will be cherished forever.
       Here's to the beauty of wanderlust and the magic of travel! 🌍🌴☀️ #VacationDiaries #Wanderlust
     </Text>
     <Image
       source={require('./vacation.png')}
       style={styles.image}
     />
   </View>
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    fontSize: 25,
    marginBottom: 20,
  },
  profile: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '500',
  },
  value: {
    fontWeight: '100',
  },
  content: {
    flexDirection: 'column',
    paddingHorizontal: -20,
    paddingLeft: 2,
    paddingRight: 2,
  },
  image: {
    height: 400,
    width: 380,
    
  },
});
