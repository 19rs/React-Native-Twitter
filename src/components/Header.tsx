import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

interface Props {
    avatar: string,
    name: string,
    username: string,
}

const Header: FC<Props> = ({ avatar, name, username }) => {
    return (
        <View style={ styles.infoUser }>
            <View style={ styles.avatar}>
                <Image style={ styles.imagem } source={{ uri:avatar }} />
                <View>
                    <Text style={ styles.textoNome }>{ name }</Text>
                    <Text style={ styles.textoUsername }>{ username }</Text>
                </View>
            </View>
            <AntDesign name="twitter" size={26} color="#00BFFF" />
        </View>
    )
}

const styles = StyleSheet.create({
    infoUser: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10
    },
    avatar: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
    },
    imagem: {
        width: 48,
        height: 48
    },
    textoNome: {
        color: '#00BFFF',
        fontWeight: 'bold',
        fontSize: 22
    },
    textoUsername: {
        color: '#BCBABC',
        fontSize: 16
    }
});

export default Header;