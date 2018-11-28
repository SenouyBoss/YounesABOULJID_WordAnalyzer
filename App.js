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
        //this.setState({vowel: this.state.vowel+1});
        v= v+1;
			}
			/* else if( word_arr[i]== 0 || 
				word_arr[i]== 1 ||
				word_arr[i]== 2 ||
				word_arr[i]== 3 ||
				word_arr[i]== 4 ||
				word_arr[i]== 5 ||
				word_arr[i]== 6 ||
				word_arr[i]== 7 ||
				word_arr[i]== 8 ||
				word_arr[i]== 9 
			){
        //this.setState({numbers: this.state.numbers+1});
        n=n+1;
			} */
			else{
        //this.setState({consonants: this.state.consonants+1});
        c = c+1;
			}
			
      
    }	
  /*   console.log(v);
    console.log(n);
    console.log(c); */
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