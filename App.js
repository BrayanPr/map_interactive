import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: "100%",
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


// class MapLoco extends React.Component{

//   state = {
//     region: {
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }
//   }
  
//   getInitialState() {
//     return {
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
//     };
//   }
  
//   onRegionChange(region) {
//     this.setState({ region });
//   }
//   render() {
//     return (
//       <MapView
//         region={this.state.region}
//         onRegionChange={this.onRegionChange}
//       />
//     );
//   }
// }

// export default MapLoco

export default () => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
        latitude: 28.6491049,
        longitude: -106.0282516,
        latitudeDelta: 0.001,
        longitudeDelta: 0.0,
      }}
     >
     </MapView>
   </View>
);