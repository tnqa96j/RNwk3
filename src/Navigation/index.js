import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View,Text ,Image} from "react-native";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeStack" 
                component={HomeScreen} 
                options={{
                    headerLeft:() => (
                    <MaterialCommunityIcons 
                        name="menu"
                        size={26}
                        onPress={() => navigation.openDrawer()}
                    />),
                    headerRight:() =>(
                        <Ionicons 
                            name="search"
                            size={26}
                        />
                    ),
                    title:'',
                }}
            />
            <Stack.Screen 
                name="DetailStack" 
                component={DetailScreen} 
                options={{
                    headerLeft:() => (
                    <MaterialCommunityIcons 
                        name="arrow-left"
                        size={26}
                        onPress={() => navigation.goBack()}
                    />),
                    headerRight:() =>(
                        <Ionicons 
                            name="bookmark-outline"
                            size={26}
                        />
                    ),
                    title:'',
                }}/>
        </Stack.Navigator>
    );
}

const HomeTab = () => {
    return (
    <>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#6200EE",
                
            }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}  />
                    ),
                }} />
            <Tab.Screen
                name="WishList"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="MyBooks"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
        <View style={{height:5,backgroundColor:"white"}}></View>
        </>
    );
}

const HomeDrawerContent = (props) => {
    return (
        <DrawerContentScrollView>
            <View style={{
                height:170,
                paddingStart:20,
                paddingTop:50,
                borderBottomWidth:1,
                borderBottomColor:"#cfcfcf",
                marginBottom:20
            }}>
                <Image 
                    source={{uri:"https://s3-alpha-sig.figma.com/img/a14c/921b/dcea36fbb59ee6c44fdec352c284fb5b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ljBWIFbzc30b9U9cXkizup4O4pzAYNKLUmPGCNpZlzUuZoBuFhZeXuJqHWuYV1d6r6xwdQyVE5K6IhFYW5Py~rpA70pim9qMAR1HC5EBZnITDtkx9cwc~Ip2f7ad-dMYgHGnvi2ei0~MxXeqtRJ5OIE0xWECkyCXlNMdxPH7fHOxVrRnqiSL~P5aH3-0J42WGa5i9TYLpP0peeOJHM8nrwM0ofe4zSqY2NOhUoz59XyKIo~zr18KDWnCdshUqAXvPxJXMXyOqPTcyQ9y2bZ7HKrQ6wVx7eWIDvuRVONWRLayyvXHwkG1a6FWLFyZSD83kqV1IvJRv28gczXNuAFM9Q__"}}
                    style={{
                        width:48,
                        height:48,
                        borderRadius:48
                    }}
                />
                <Text
                    style={{
                        marginVertical:15,
                        fontSize:24,
                        fontWeight:"bold"                   
                     }}
                >May</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={HomeDrawerContent}
            screenOptions={{
                headerShown:false,
                drawerActiveTintColor:"#6200EE"
                
            }}
        >
            <Drawer.Screen
                name="HomeDrawer"
                component={HomeTab}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Acount"
                component={HomeTab}
                options={{
                    drawerLabel: 'Acount',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />
            <Drawer.Screen
                name="Setting"
                component={HomeTab}
                options={{
                    drawerLabel: 'Setting',
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-sharp" color={color} size={26} />
                    ),
                }} />
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <HomeDrawer />
        </NavigationContainer>
    );
}