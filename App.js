import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const images = [
  { id: '1', uri: require('./assets/image1.png') },
  { id: '2', uri: require('./assets/image2.png') },
  { id: '3', uri: require('./assets/image1.png') },
  { id: '4', uri: require('./assets/image2.png') },
  { id: '5', uri: require('./assets/image1.png') },
  { id: '6', uri: require('./assets/image2.png') },
];

const App = () => {
  const renderItem = ({ item }) => (
    <Image source={item.uri} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mi Grilla de Imágenes</Text>
      </View>
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 80,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth / 2 - 10,
    height: windowWidth / 2 - 10,
    margin: 5,
  },
});

export default App;
