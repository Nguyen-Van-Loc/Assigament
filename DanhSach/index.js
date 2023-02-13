import { View, Pressable, Text, Image, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { useState,useEffect } from 'react';

const DanhSach = (props) => {
    const navigation = props.navigation;
    const route =props.route; 
    const updateItem = route.params?.editItem || null;
    const [editItem, setEditItem] = useState(updateItem);

    const onDelete = (id) => {
        Alert.alert("", "Bạn có muốn xóa không ?", [
            {
                text: "Hủy",
                onPress: () => { },
                style: "Hủy"
            },
            {
                text: "Xác Nhận",
                onPress: () => {
                    const newList = list.filter((item) => item.id !== id);
                    SetList(newList);
                }
            }
        ])
    }

    const [list, SetList] = useState([{
        imageUrl: "https://cdn-icons-png.flaticon.com/256/5175/5175213.png",
        id: 1,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/9394/9394613.png",
        id: 2,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/256/6519/6519606.png",
        id: 3,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/256/9285/9285601.png",
        id: 4,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/256/8868/8868789.png",
        id: 5,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/256/7152/7152393.png",
        id: 6,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/256/7152/7152365.png",
        id: 7,
        name: "Cua Hanh Dien Thoai",
        address: "Ha Noi",
        phone: "0123456789",
        status: "Open"
    }])
    useEffect(() => {
        if (route.params?.item != null) {
            const newList = [...list, route.params?.item];
            SetList(newList);
        }
    }, [route.params?.item])

    useEffect(() => {
        if (route.params?.editItem != null) {
            const newList = list.map(item => {
                if (item.id === route.params?.editItem.id) {
                    item = route.params?.editItem;
                    console.log(item);
                }
                return item;
            });
            SetList(newList);

        }
    }, [route.params?.editItem])
    return (
        <SafeAreaView>
            <FlatList
                data={list}
                renderItem={({ item }) =>
                    <View
                        style={{ marginTop: 10, flex: 1, flexDirection: 'row', borderWidth: 1, borderRadius: 10, margin: 10, backgroundColor: 'palegreen' }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: item.imageUrl }}
                        />
                        <View style={{ flex: 1, marginTop: 10, marginLeft: 5 }}>
                            <Text style={{ fontSize: 10 }}>Name:<Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: 'Roboto' }}> {item.name}</Text></Text>
                            <Text style={{ fontSize: 10 }}>Address:<Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: 'Roboto' }}> {item.address}</Text></Text>
                            <Text style={{ fontSize: 10 }}>Phone:<Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: 'Roboto' }}> {item.phone}</Text></Text>
                            <Text style={{ fontSize: 10 }}>Status:<Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: 'Roboto' }}> {item.status}</Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("Item Edit",{list:item})}
                            >
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: "https://cdn-icons-png.flaticon.com/256/7603/7603177.png" }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onDelete(item.id)}>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: "https://cdn-icons-png.flaticon.com/256/7603/7603415.png" }}
                                />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    
                }
                keyExtractor={(item) => item.id}
            />
            <View>
                <TouchableOpacity
                    onPress={()=> props.navigation.navigate('Add Edit',{list:list})}
                    style={{position:'relative', width: 60, height: 60,alignItems:'center',justifyContent:'center',flex:1,left:350,bottom:50}}
                >
                    <Image style={{resizeMode:'contain',width:60,height:60}}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/3357/3357507.png" }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default DanhSach;