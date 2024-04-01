import { Text, View, SectionList, FlatList } from 'react-native';
import booksData from "../json/book.json";
import ProductItem from '../components/ProductItem';

export default function HomeScreen({navigation}) {

    return (
        <View style={{
            backgroundColor:"white"
        }}>
            <SectionList
                sections={booksData}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item, section }) => (
                    section.horizontal ? <ProductItem booksData={item} /> : null
                )}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section }) => (
                    <View>
                        <Text
                            style={{
                                fontSize:24,
                                fontWeight:"bold",
                                paddingStart:10,
                                marginTop:20
                            }}
                        >{section.title}</Text>
                        <FlatList
                            data={section.data}
                            horizontal={true}
                            renderItem={({ item }) => <ProductItem booksData={item} navigation={navigation}/>}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                )}
                stickySectionHeadersEnabled={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}