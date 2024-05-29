import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';

export default function Details() {
  return (
    <View style={estilo.container}>
        <Text>TESTE DETAIlS</Text>

        

    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});