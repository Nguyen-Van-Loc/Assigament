import { View, Pressable, Text, Image,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

const Edit = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const data = route.params?.list || null;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [link, SetLink] = useState('');
    const [status, setStatus] = useState('');
    useEffect(() => {
        if(data != null){
            setName(data.name);
            setAddress(data.address);
            setPhone(data.phone);
            setLogo(data.link);
            setStatus(data.status);
        }
    
    },[data]);

    const onReset = () => {
        setName('');
        setAddress('');
        setPhone('');
        setLogo('');
        setStatus('');
    }

    const onSave = () => {
        const newItem = {
            id: data.id,
            name: name,
            address: address,
            phone: phone,
            link: link,
            status: status
        };
        navigation.navigate('Store List', {editItem: newItem },true);
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
            <TextInput
                    style={styles.input}
                    placeholder="Link"
                    onChangeText={(text) => SetLink(text)}
                    keyboardType="url"
                    placeholderTextColor={'gray'}
                    defaultValue={link}
                />
                <TextInput
                    autoFocus
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor={'gray'}
                    defaultValue={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    onChangeText={(text) => setAddress(text)}
                    placeholderTextColor={'gray'}
                    defaultValue={address}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    onChangeText={(text) => setPhone(text)}
                    keyboardType='phone-pad'
                    placeholderTextColor={'gray'}
                    defaultValue={phone}

                />
               
                <TextInput
                    style={styles.input}
                    placeholder="Status"
                    onChangeText={(text) => setStatus(text)}
                    placeholderTextColor={'gray'}
                    defaultValue={status}
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => onReset()}>
                        <View style={styles.buttonCancel}>
                            <Text style={{ color: 'white', fontSize: 18, textAlign: "center", fontWeight: 'bold' }}>CANCEL</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        onSave();
                    }}>
                        <View style={styles.button}>
                            <Text style={{ color: 'white', fontSize: 18, textAlign: "center", fontWeight: 'bold' }}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default Edit;
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        marginVertical: 10
    },
    button: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#55BCF6'
    },
    buttonCancel: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'gray'
    }

});