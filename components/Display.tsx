import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => (
  <View style={styles.display}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  display: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
  },
});

export default Display;
