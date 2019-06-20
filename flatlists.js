import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
render() {
  return (
    <View style={styles.container}>
    <FlatList
      data={[
      {key: 'Pete'},
      {key: 'Lishan'},
      {key: 'Charmaine'},
      {key: 'Alistair'},
      {key: 'Jean'},
      {key: 'Carol'},
      {key: 'Camila'},
      {key: 'Koh'},
      {key: 'Mona'},
      {key: 'Josh'},
      {key: 'Anita'},
      {key: 'Ryan'},
      {key: 'Candice'},
      {key: 'you?'},

      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
