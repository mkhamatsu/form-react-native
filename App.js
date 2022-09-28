import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form.js';

function App() {


  return (
    <View style={styles.sectionContainer}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
