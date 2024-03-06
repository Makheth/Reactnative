import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import UserInfo from './UserInfo';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
      <Image
        source={require('./me.png')}
        style={styles.profilepicture}
      />
      <UserInfo label="Sasha Morobi" value="16 min ago" />
      </View>
      <View>
      <AntDesign name="like2" size={24} color="black" />
      </View>
      
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  profilepicture: {
  height: 50,
  width: 50,
  borderRadius:50,
  
  },
  details:{
    flexDirection: "row"
  },
  
});

