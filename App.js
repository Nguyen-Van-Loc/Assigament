import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home/index'
import DanhSach from './DanhSach/index'
import Info from './Info/index';
import Edit from './Edit/editDanhSach';
import AddStore from './AddStore/addStore'


const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Info} />
                <Stack.Screen name='Store List' component={DanhSach} />
                <Stack.Screen name='Item Edit' component={Edit} />
                <Stack.Screen name='Add Edit' component={AddStore} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;