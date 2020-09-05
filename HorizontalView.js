import React from 'react';
import {View, Text, StyleSheet,ScrollView,Dimensions,Image} from 'react-native';


export default class HorizontalView extends React.Component{
    render(){
        return(
            
            <ScrollView horizontal = {true} pagingEnable = {true} style = {styles.container}>
                <View style = {styles.outer}>
                    <Text style = {styles.innerText}>Happy Teachers Day</Text>
                    <Image source={require("../assets/happy-teachers-day-picture.jpg")} style={{width:200, height:200}}/>
                </View>
                <View style = {[styles.outer, styles.red]}>

                    <Text style = {styles.innerText}>Happy Teachers Day! Wishing you joy and happiness, you are an amazing teacher, 
                         and you only deserve the best. 
                        You are the spark, the inspiration, the guide, the candle to my life.</Text>
                </View>

                <View style = {[styles.outer, styles.green]}>
                <Image source={require("../assets/pic.jpg")} style={{width:200, height:200}}/>
                    <Text style = {styles.innerText}>You are the best Teacher for me!</Text>
                </View>
                <View style = {[styles.outer, styles.red]}>
                <Image source={require("../assets/thank-you.jpg")} style={{width:200, height:200}}/>
                    <Text style = {styles.innerText}>Thank you so much!</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       
    },
outer:{
backgroundColor: '#00b5cc',
alignItems : 'center',
justifyContent: 'center',
width : Dimensions.get('window').width,
height : Dimensions.get('window').height

},

innerText:{
 color : '#fff',
 fontSize : 25,
 fontWeight : 'bold'
},
red:{
backgroundColor : 'pink'
},
green : {
    backgroundColor : 'red'
}

})