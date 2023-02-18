import { View, Pressable, Text, Image, Button } from 'react-native';

const Info = (props) => {
    const navigation = props.navigation;
    return (
        <View>
            <Image
                style={{ width: "100%", height: 250 }}
                source={require('../assets/nen.png')}
            />
            <View style={{alignItems:'center',marginTop:-50}}>
                <Image
                    style={{ width: 100, height: 100, }}
                    source={require('../assets/man.png')}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={{color:'#808080',fontSize:17}}>Name: <Text style={{fontSize:20,color:'black'}}>Nguyen Van Loc</Text></Text>
                <Text style={{color:'#808080',fontSize:17}}>Msv: <Text style={{fontSize:20,color:'black'}}>Ph20710</Text></Text>
            </View>
            <View style={{width:'100%', alignItems:'center',justifyContent:'center'}}>
                <Button title='Store'
                onPress={()=>props.navigation.navigate('Store List')}>
                </Button>
            </View>
        </View>
    );
};
export default Info;