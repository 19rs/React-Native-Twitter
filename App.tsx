import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Feed from './src/screens/Feed';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const data = [
    {
        id: "1",
        avatar: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/5d67e39d-9eb9-4563-202b-9c795a845100/preview",
        // avatar: "https://source.unsplash.com/random/?profile",
        name: "Fulano",
        username: "@fulano1999",
        comments: 1,
        reposts: 2,
        likes: 3,
        text: "Conteúdo do tweet 1",
        image: "https://source.unsplash.com/random/?Movies",
        data: "3:51 PM - Jan 24, 2018"
    },
    {
        id: "2",
        avatar: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-2-1024.png",
        name: "Fulana",
        username: "@fulaninha_5",
        comments: 3,
        reposts: 1,
        likes: 2,
        text: "Conteúdo do tweet 2",
        image: "https://source.unsplash.com/random/?Sports",
        data: "3:48 PM - Jan 24, 2018"
    },
    {
        id: "3",
        avatar: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-2-1024.png",
        name: "Fulana",
        username: "@fulaninha_5",
        comments: 5,
        reposts: 2,
        likes: 4,
        text: "Conteúdo do tweet 3",
        image: "https://source.unsplash.com/random/?Geography",
        data: "3:40 PM - Jan 24, 2018"
    },
    {
        id: "4",
        avatar: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/5d67e39d-9eb9-4563-202b-9c795a845100/preview",
        name: "Beltrano",
        username: "@bel_tra_no",
        comments: 0,
        reposts: 0,
        likes: 1,
        text: "Conteúdo do tweet 4",
        image: "https://source.unsplash.com/random/?Racing",
        data: "9:24 PM - Jan 22, 2018"
    },
    {
      id: "5",
      avatar: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/5d67e39d-9eb9-4563-202b-9c795a845100/preview",
      name: "Beltrano",
      username: "@bel_tra_no",
      comments: 0,
      reposts: 0,
      likes: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc tempor ante laoreet consectetur pulvinar. Morbi vel tortor dolor. Etiam auctor turpis id faucibus porta. Proin ut arcu ac felis venenatis feugiat eu quis massa. Mauris ut finibus enim. Aliquam placerat ac nulla id egestas. Phasellus in diam sit amet eros pulvinar fringilla id nec nulla. ",
      image: "https://source.unsplash.com/random/?Football",
      data: "8:39 PM - Jan 22, 2018"
  },
  ]

  return (
    <SafeAreaView style={{flex: 1 }}>
      <View style={styles.container}>
        <FlatList 
          data={data}
          renderItem={({ item }) => (
            <Feed
              avatar={item.avatar}
              name={item.name}
              username={item.username}
              comments={item.comments}
              reposts={item.reposts}
              likes={item.likes}
              text={item.text}
              image={item.image}
              data={item.data}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 500,
    // margin: "auto",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
