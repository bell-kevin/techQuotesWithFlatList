import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const QUOTES = [
  { id: '1', quote: 'Technology can be our friend and help us connect with others; however, it can also become an enemy by taking up our time and distancing us from those around us. We must find a balance.', author: 'Dieter F. Uchtdorf' },
  { id: '2', quote: 'Technology has its place, but we must not become enslaved to any of it. It can rob us of the very power and capacity that it was designed to give us.', author: 'Russell M. Nelson' },
  { id: '3', quote: 'Technology has facilitated and hastened the sharing of inspired messages, yet it can also distract us from receiving them. Be wise in how you use technology.', author: 'David A. Bednar' },
  { id: '4', quote: 'The Lord uses technology for His purposes. We have a responsibility to use it to further His work and not to demean or degrade ourselves.', author: 'M. Russell Ballard' },
  { id: '5', quote: 'As technology improves, we must be cautious that it does not distract us from our relationship with God or from serving others.', author: 'Henry B. Eyring' },
  { id: '6', quote: 'Technology can help us accomplish many good things, but it cannot provide lasting happiness or fulfillment. That can only come from living the gospel of Jesus Christ.', author: 'Dallin H. Oaks' },
  { id: '7', quote: 'Technology has the power to unite and inspire us, but it can also divide and discourage us. We must choose to use it in ways that bring us closer to God and to each other.', author: 'Quentin L. Cook' },
  { id: '8', quote: 'Technology can be a powerful tool for good, but we must use it wisely and in moderation. It should never take the place of meaningful relationships or the things that matter most in life.', author: 'Neil L. Andersen' },
  { id: '9', quote: 'Technology is a gift from God that can bless our lives and the lives of others, but we must not allow it to control us or dominate our time and attention.', author: 'Ronald A. Rasband' },
  { id: '10', quote: 'Technology can enhance our ability to learn, communicate, and serve, but it cannot replace the power of personal testimony or the importance of living the gospel of Jesus Christ.', author: 'Gary E. Stevenson' },
];

const Separator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.quote}>{item.quote}</Text>
    <Text style={styles.author}>- {item.author}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.quote}>"{item.quote}"</Text>
      <Text style={styles.author}>- {item.author}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Technology Quotes</Text>
      <FlatList
        data={QUOTES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
  },
});

export default App;