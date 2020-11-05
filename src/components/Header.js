import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = ({ name }) => {
  const { container, header } = styles;
  return (
    <View style={container}>
      <Text style={header}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(90,96,167, 0.2)',
    color: '#000',
  },
});

export default Header;
