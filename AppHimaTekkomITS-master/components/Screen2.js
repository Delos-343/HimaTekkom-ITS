import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import newsData from '../data/newsData.json';
import moment from 'moment';

const Screen2 = () => {
  const navigation = useNavigation();

  const renderNewsItem = ({ item, post }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NewsItem', { item })}>
        <View style={styles.container}>
          <Image
            source={{ uri: post.featuredImage.url }}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <View style={styles.newsreel}>
            <Text style={styles.title}>
              {/* item.title */}
              {post.title}
            </Text>
            <Text style={styles.date}>
              {/* item.date */}
              {moment(post.createdAt).format("MM/DD/YYYY")}
            </Text>
            <Text numberOfLines={3}>{item.content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={newsData}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ padding: 10 }}
    />
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
    paddingVertical: '.5rem',
}
})

export default Screen2;