import { View, Text, Image, Pressable } from "@gluestack-ui/themed";
import { Rating } from "react-native-ratings";
export default function ProductItem({ booksData, navigation }) {

    return (
        <View style={{
            margin: 10,
        }}>
            <Pressable
                onPress={() => navigation.navigate('DetailStack', booksData)}
            >
                <Image
                    source={{ uri: booksData.cover }}
                    style={{
                        width: 140,
                        height: 200,
                        marginBottom:10
                    }}
                    alt="none" />
                {booksData.rate ? <Rating
                    style={{
                        paddingVertical: 10,
                        alignItems: 'flex-start'
                    }}
                    ratingCount={5}
                    imageSize={20}

                /> : null}
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom:5
                    }}
                >{booksData.title}</Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: "#131313"
                    }}
                >{booksData.writer}</Text>


            </Pressable>

        </View>
    );
}