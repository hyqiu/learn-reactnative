// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class albums extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('albums', () => albums);

/*
  Now we'll start
                    */
// 1 - Import a library to help create a Component

import React from 'react';
// import ReactNative from 'react-native';
import { Text, AppRegistry, View } from 'react-native';
// import the header
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// 2 - Create a component

// const App = () => {
//   return(
//     <Text> Some Text </Text>
//   );
// };

//// Refactored

const App = () => (
  //<Text> Some Text </Text>
  // self-closing
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// 3 - Render to device

// ReactNative.AppRegistry.registerComponent('albums', () => App);
AppRegistry.registerComponent('albums', () => App);
