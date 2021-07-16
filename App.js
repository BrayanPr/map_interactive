import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Dimensions } from 'react-native'


class Map extends React.Component {
  state = {
    lat:0,
    long:0,
    flag:true
  }
  handlePress = () => {
    if(this.state.flag){
      this.setState({ lat:28.6533963, long:-106.0391855, flag:false})
    }else{
      this.setState({ lat:28.6491049, long:-106.0282516, flag:true})
    }
   
  }
  handleMapPress =  (lang, long) => {
    this.setState({ lat:lang, long:long, flag:false})
  }
    render() {
      const {lat, long} = this.state
        return (
          <ScrollView>
          <MapView
            showsMyLocationButton={true}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.container}
            initialRegion={{
              latitude: 28.6491049,
              longitude: -106.0282516,
              latitudeDelta: 0.001,
              longitudeDelta: 0.0,
            }}
            onPress={ e => this.handleMapPress(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude) }
            >
            <Marker
              coordinate={{ latitude: lat, longitude: long}}
            />
          </MapView>
          <View>
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={styles.button}>si</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        )
    }

}
height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    borderRadius:500,
    height: 500,
    width: "100%", 

  },
  button : {
    backgroundColor:"black",
    alignSelf:"center",
    color:"white"
  }
});

export default Map
