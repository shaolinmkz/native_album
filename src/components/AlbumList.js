import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Card from './Card';

const AlbumList = () => {
  const [state, setState] = useState({
    pageLoading: true,
    albums: [],
  });

  useEffect(() => {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          pageLoading: false,
          albums: data,
        }));
      });
  }, []);

  return state.pageLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#5a60a7" />
    </View>
  ) : (
    <View>
      <Text style={styles.heading}>Album List</Text>

      <FlatList
        data={state.albums}
        keyExtractor={({ url }) => url}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.title}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
  },
});

export default AlbumList;
