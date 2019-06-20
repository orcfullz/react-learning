
//   Button Basics Starts here
//   render(){
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//         <Button
//           onPress={this._onPressButton}
          //title="Press Me"
//           />
//           </View>
//           <View style={styles.buttonContainer}>
//             <Button
//               onPress={this._onPressButton}
//               title="Press Me"
//               color="#841584"
//               />
//               </View>
//             <View style={styles.alternativeLayoutButtonContainer}>
//             <Button
//               onPress={this._onPressButton}
//               title="this looks great!"
//               />
//               <Button
//                 onPress={this._onPressButton}
//                 title="ok!"
//                 color="#841584"
//                 />
//                 </View>
//               </View>
//             );
//           }
//         }
//         const styles = StyleSheet.create({
//           container: {
//            flex: 1,
//            justifyContent: 'center',
//           },
//           buttonContainer: {
//             margin: 20
//           },
//           alternativeLayoutButtonContainer: {
//             margin: 20,
//             flexDirection: 'row',
//             justifyContent: 'space-between'
//           }
//         });
//
//         // skip this line if using Create React Native App
//         AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
//
// Everything below here is in regards to the text input manipulation
//
// export default class PizzaTranslator extends Component {
//   constructor(props){
//
//     super(props);
//     this.state = {text:''};
//
//   }
// render() {
//   return (
//     <View style={{padding:10}}>
//       <TextInput
//         style={{height:40}}
//         placeholder="Type here to translate!"
//         onChangeText={(text) => this.setState({text})}
//         />
//       <Text style={{padding: 10, fontSize:42}}>
//         {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//         </View>
//       );
//
// }
// }
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
//
//
//
// Everything below here is for the blinking and text manipulation
//
// const styles = StyleSheet.create({
//
// bigBlue: {
//   color: 'blue',
//   fontWeight: 'bold',
//   fontSize: 50,
// },
// smallRed: {
//   color: 'red',
//   fontWeight: 'Lighter',
//   fontSize: 20,
// },
// });
// class Blink extends Component {
//       componentDidMount(){
//
// // Toggles the state every second
//   setInterval(() => (
//     this.setState(previousState => (
//       { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }
//
//   //state object
//
//   state = {isShowingText: true};
//
//   render() {
//     if (!this.state.isShowingText){
//       return null;
//     }
//
//   return (
//       <Text>{this.props.text}</Text>
//       );
//     }
//   }
//
//
//
// export default class BlinkApp extends Component {
//
//
//   render(){
//     return (
//     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'flex-start',}}>
//
//         <View style={{ width: '250', height: '250', top: 50, backgroundColor: 'powderblue'}}>
//
//           <Text style={styles.bigBlue}><Blink text="Alistair" /></Text>
//           </View>
//   <View style={{ height: '250', top: 50, backgroundColor: 'skyblue'}}>
//           <Text style={styles.bigBlue}><Blink text="Charmaine" /></Text>
//           </View>
//           <View style={{height: '250', top: 50, backgroundColor: 'steelblue'}}>
//
//           <Text style={styles.bigBlue}><Blink text="Pete" /></Text>
//           </View>
//   </View>
//
//       );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
