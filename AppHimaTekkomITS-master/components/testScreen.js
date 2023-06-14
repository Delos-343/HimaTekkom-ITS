import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NEWS_REEL } from '../data/hyGraph';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

const TestScreen = () => {

  const { loading, error, data } = useQuery(NEWS_REEL);

  if (loading) return <Text> Loading... </Text>;
  if (error) return <Text> Error : (</Text>;

  return (
    <View>
      <FlatList
        data={data.edges.node}
        keyExtractor={item => item.createdAt}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.excerpt}</Text>
            <Text>Published at: {item.createdAt}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  newsreel: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
    paddingVertical: '8px',
}
})

export default TestScreen;
