import { View, Pressable, Text, Image, TouchableOpacity } from 'react-native';

const Home = (props) => {
    const navigation = props.navigation;
    const NextLayout=(nameLayout)=>{
        navigation.navigate(nameLayout);
    }
    return (
        <View>
            <Image style={{ width: 420, height: 220 }}
                source={require('../assets/Anhbia.png')} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginTop:20 }}>
                <TouchableOpacity style={{width:180,height:150, borderWidth: 1,alignItems:'center',borderRadius:20 }} onPress={()=>NextLayout('Profile')} >
                    <Image
                        style={{ width: 110, height: 110,marginTop:10 }}
                        source={require('../assets/profile.png')}
                    />
                     <Text style={{fontSize:20 ,fontFamily: 'Roboto',fontWeight:'bold',color:'#dc143c'}} >Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{width:180,height:150, borderWidth: 1,alignItems:'center',borderRadius:20}} onPress={()=>NextLayout('Store List')} >
                    <Image
                        style={{ width: 110, height: 110,marginTop:10}}
                        source={require('../assets/store.png')}
                    />
                    <Text style={{fontSize:20 ,fontFamily: 'Roboto',fontWeight:'bold',color:'#dc143c'}}>Store</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Home;