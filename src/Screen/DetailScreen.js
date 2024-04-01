import { Text,View } from "react-native";
import ProductDetail from "../components/ProductDetail";

export default function DetailScreen({ route }){
    return(
        <View style={{ flex: 1, alignItems: 'center',backgroundColor:'white' }}>
            <ProductDetail booksData={route}/>
        </View>
    );
}