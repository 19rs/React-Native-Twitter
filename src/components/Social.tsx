import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


interface Props {
    comments: number,
    reposts: number,
    likes: number
}

const Social: FC<Props> = ({ comments, reposts, likes }) => {
    return (
        <View style={styles.social}>
            <View style={styles.icone}>
                <EvilIcons name="comment" size={30} color="black" />
                <Text>{ comments }</Text>
            </View>
            
            <View style={styles.icone}>
                <AntDesign name="retweet" size={24} color="black" />
                <Text>{ reposts }</Text>
            </View>

            <View style={styles.icone}>
                <AntDesign name="hearto" size={24} color="black" />
                <Text>{ likes }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    social: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 30,
    },
    icone: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }
});

export default Social;