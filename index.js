import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <>
    <Header name="Albums!" />
    <AlbumList />
  </>
);

AppRegistry.registerComponent(appName, () => App);
