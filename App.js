import React, { Component } from 'react';
import { Alert, AppRegistry ,FlatList, ActivityIndicator, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet, Text, View, Button } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.state = {
    who: 0
  };
  }


  componentDidMount(){
    return fetch('https://raw.githubusercontent.com/orcfullz/agency-test-data/master/agency.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,}, function(){



      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // On Button Press, use the reference of item and return the following function
  _onPressButton(item) { return () => {
    //item's name + some text
    Alert.alert(' hello ' + item.name  )
      console.log('hello ' + item.name )

    }
  }
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
        </View>
      )
    }

    // <TouchableHighlight onPress={this._onPressButton} _onLongPress={this._onLongPressButton}>
    //
    // </TouchableHighlight>
    return(

      <View style={{paddingTop:100, width:'100%', left:'10%'}}>

      <FlatList data={this.state.dataSource}
        renderItem={({item}) =>
      //   <Text style={{fontSize:20, padding:5, fontWeight:'bold'}}>{item.name}, {item.releaseYear}
      //
      //
      // </Text>
      <TouchableHighlight onPress={this._onPressButton(item)} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>{item.id}. {item.name}, {item.releaseYear}</Text>
        <Text className="Hello"></Text>
        </View>
        </TouchableHighlight>
    }

      keyExtractor={({id}, index) => id}
      />
      </View>
    );

  }
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});



AppRegistry.registerComponent('AwesomeProject', () => Touchables);
