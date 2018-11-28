import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';



export default class App extends React.Component{
	constructor(){
    super();
		this.state = {
			word: "",
			vowel: 0,
			consonants: 0,
			numbers: 0,

		};
	}


	analyze(){
		this.state.word.toLowerCase();
    var word_arr = this.state.word.split('');
	var v=0, c=0, n=0;
	n = word_arr.length;
	console.log(n);
	this.setState({numbers: word_arr.length});
		for(i=0; i< word_arr.length; i++){
			if( word_arr[i]== 'a' || 
				word_arr[i]== 'o' ||
				word_arr[i]== 'u' ||
				word_arr[i]== 'i' ||
				word_arr[i]== 'e' 
			){
        v= v+1;
			}
			
			else{
        c = c+1;
			}
			
      
    }	
  
    this.setState({vowel: v});
      this.setState({numbers: n});
      this.setState({consonants: c});	
  }


	render(){
		return (
			<View style={styles.container}>

				<View style={styles.header}>
				<Text style={{color: 'purple', fontSize: 20, fontWeight: 'bold'}}> A Word Analyze </Text>
				</View>

				<View style={styles.content}>

				<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}> Word  {"\n"}</Text>
				<TextInput placeholder="Your word" onChangeText={(word)=> this.setState({word})} />
				<Text> {"\n"}  </Text>
				<Button   title='Analyze' onPress={()=> {this.analyze();}} />
				<Text> {"\n"}  </Text>
				<Text> word: {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} {this.state.word} </Text> 
				<Text> vowel: {"\t"}{"\t"}{"\t"}{"\t"}{"\t"} {this.state.vowel} </Text> 
				<Text> consonants: {"\t"} {this.state.consonants} </Text> 
				<Text> number: {"\t"}{"\t"}{"\t"}{"\t"} {this.state.numbers} </Text> 
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		)
  }
}

	const styles = StyleSheet.create({
		container:{
			flex:1,
			alignItems: 'center',
    	justifyContent: 'center',
		},
		header: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			
			
		},

		content: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'stretch',
		},

		footer: {
			flex:1,
		},
	});
