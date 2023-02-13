import { View, Pressable, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
const AddStore = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const data = route.params?.list || null;
    const [link, SetLink] = useState('');
    const [name, SetName] = useState('');
    const [address, SetAddress] = useState('');
    const [phone, SetPhone] = useState('');
    const [status, SetStatus] = useState('');
    const onSave = () => {
        const newItem = {
            id: data == null ? 1 : data[data.length - 1].id + 1,
            name: name,
            address: address,
            phone: phone,
            status: status
        };
        navigation.navigate('Store List', { item: newItem }, true);
    }
    return (

        <SafeAreaView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Thêm Cửa Hàng</Text>
                <TextInput placeholder='Link Ảnh' keyboardType="url" value={link} style={{ marginTop: 10, width: 350, borderWidth: 1, padding: 10, fontSize: 16, borderRadius: 10 }} onChangeText={(text) => SetLink(text)}></TextInput>
                <TextInput placeholder='Tên Cửa Hàng' value={name} style={{ marginTop: 10, width: 350, borderWidth: 1, padding: 10, fontSize: 16, borderRadius: 10 }} onChangeText={(text) => SetName(text)}></TextInput>
                <TextInput placeholder='Địa Chỉ' keyboardType='phone-pad' value={address} style={{ marginTop: 10, width: 350, borderWidth: 1, padding: 10, fontSize: 16, borderRadius: 10 }} onChangeText={(text) => SetAddress(text)}></TextInput>
                <TextInput placeholder='Số Điện Thoại' value={phone} style={{ marginTop: 10, width: 350, borderWidth: 1, padding: 10, fontSize: 16, borderRadius: 10 }} onChangeText={(text) => SetPhone(text)}></TextInput>
                <TextInput placeholder='Trạng thái Hoạt Động' value={status} style={{ marginTop: 10, width: 350, borderWidth: 1, padding: 10, fontSize: 16, borderRadius: 10 }} onChangeText={(text) => SetStatus(text)}></TextInput>
                <TouchableOpacity style={{ marginTop: 10, padding: 10, borderRadius: 10, backgroundColor: '#1e90ff' }} onPress={() => { onSave(); }}>
                    <Text style={{ color: 'white' }}>Xác Nhận</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};
export default AddStore;