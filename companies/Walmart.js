import React from "react";
import {Text,View,StyleSheet,Image,ScrollView,Linking, FlatList} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Foundation } from '@expo/vector-icons';

const Walmart = ()=>{
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/suchi.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Ms. Shuchi Vaishya</Text>
                <Text style={{color: '#130f40',fontSize: 20}}>SDE-II</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/shuchi-vaishya-ba9264187/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:shuchiv18@gmail.com') }/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/rajshree.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Ms. Rajshree Gupta</Text>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>SDE-II</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/rajshree-gupta-29a815179/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:rajshreegupta2220@gmail.com') }/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbe76',
    },
    box: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    item: {
        color: '#fff',
        backgroundColor: '#2c2c54',
        alignSelf:'flex-start',
        margin: 10 ,
        padding: 10,
        fontSize: 18,
        height: 44,
        borderRadius: 20,
    },
})

export default Walmart;