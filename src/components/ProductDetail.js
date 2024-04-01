import { View, Text, Image, Pressable  } from "react-native";
import { Rating } from "react-native-ratings";

export default function ProductDetail({ booksData }) {

    return (
        <View style={{
            alignItems: "center"
        }}>
            <Image
                source={{ uri: booksData.params.cover }}
                style={{
                    width: 210,
                    height: 300,
                    marginVertical: 30
                }}
            />
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold"
                }}
            >{booksData.params.title}</Text>
            <Text
                style={{
                    fontSize: 12,
                    color: "#5e5e5e",
                    marginTop: 5
                }}
            >{booksData.params.writer}</Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Rating
                    style={{
                        paddingVertical: 10,
                    }}
                    ratingCount={5}
                    imageSize={20}

                />
                <Text
                    style={{
                        marginLeft: 15
                    }}
                >3.5
                    <Text
                        style={{ color: "#5e5e5e" }}
                    >/ 5.0</Text></Text>

            </View>
            <Text
                style={{
                    paddingHorizontal: 10,
                    fontSize: 14,
                    lineHeight: 24,
                    textAlign: "center",
                    letterSpacing: 0.012,
                    marginTop:10,
                    marginBottom:25
                }}
            >{booksData.params.description}</Text>

            <Pressable>
                <View
                style={{
                    backgroundColor:"#6200EE",
                    padding:12,
                    borderRadius:5,
                }}>
                    <Text style={{
                        color:"white",
                        fontSize:14,
                        lineHeight:16,
                        fontWeight:500
                    }}>Buy Now for $46.99</Text>
                </View>
            </Pressable>

        </View>
    );
}