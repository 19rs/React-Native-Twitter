import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
    text: string,
    image: string,
    data: string
}

const Body: FC<Props> = ({ text, image, data }) => {
    return (
        <View>
            <Text style={ styles.texto }>{ text }</Text>
            <Image style={ styles.imagem } source={{ uri:image }} />
            <Text style={ styles.data }>{ data }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        marginTop: 10,
        width: 400,
        height: 250,
        padding: 5,
        margin: 'auto'
    },
    texto: {
        fontSize: 16,
        width: 400,
    },
    data: {
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 14,
        color: "#AAA8AA"
    }
});


export default Body;