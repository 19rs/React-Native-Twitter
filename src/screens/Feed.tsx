import { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from '../components/Header';
import Body from "../components/Body";
import Social from "../components/Social";

interface Props {
    avatar: string,
    name: string,
    username: string,
    text: string,
    comments: number,
    reposts: number,
    likes: number,
    image: string,
    data: string,
}

const Feed: FC<Props> = ({
    avatar,
    name,
    username,
    text,
    comments,
    reposts,
    likes,
    image,
    data
}) => {
    return (
        <View style={styles.container}>
            <Header avatar={avatar} name={name} username={username} />
            <Body text={text} image={image} data={data}/>
            <Social comments={comments} reposts={reposts} likes={likes} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        gap: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CAC7CA",
        margin: 5,
        width: "95%",
        padding: 20,
        shadowColor: "#333",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default Feed;