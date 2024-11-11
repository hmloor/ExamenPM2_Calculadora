import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Display from '../components/Display';

const CalculatorScreen: React.FC = () => {
  const [input, setInput] = useState('');

  const handlePress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input); 
      setInput(String(result));
    } catch (error) {
      Alert.alert('Error', 'Entrada inválida');
      setInput('');
    }
  };

  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(parseFloat(input));
      setInput(String(result));
    } catch (error) {
      Alert.alert('Error', 'Entrada inválida para raíz cuadrada');
    }
  };

  const handleSquare = () => {
    try {
      const result = Math.pow(parseFloat(input), 2);
      setInput(String(result));
    } catch (error) {
      Alert.alert('Error', 'Entrada inválida para potencia al cuadrado');
    }
  };

  return (
      <View style={styles.container}>
          <Display value={input} />
          <View style={styles.row}>
              <Button title="7" onPress={() => handlePress('7')} style={styles.defaultButton} />
              <Button title="8" onPress={() => handlePress('8')} style={styles.defaultButton} />
              <Button title="9" onPress={() => handlePress('9')} style={styles.defaultButton} />
          </View>
          <View style={styles.row}>
              <Button title="4" onPress={() => handlePress('4')} style={styles.defaultButton} />
              <Button title="5" onPress={() => handlePress('5')} style={styles.defaultButton} />
              <Button title="6" onPress={() => handlePress('6')} style={styles.defaultButton} />
          </View>
          <View style={styles.row}>
              <Button title="1" onPress={() => handlePress('1')} style={styles.defaultButton} />
              <Button title="2" onPress={() => handlePress('2')} style={styles.defaultButton} />
              <Button title="3" onPress={() => handlePress('3')} style={styles.defaultButton} />
          </View>
          <View style={styles.row}>
              <Button title="0" onPress={() => handlePress('0')} style={styles.defaultButton} />
              <Button title="." onPress={() => handlePress('.')} style={styles.defaultButton} />
          </View>
          <View style={styles.row}>
          </View>
          <View style={styles.row}>
              <Button title="+" onPress={() => handlePress('+')} style={styles.operationButton} />
              <Button title="-" onPress={() => handlePress('-')} style={styles.operationButton} />
              <Button title="*" onPress={() => handlePress('*')} style={styles.operationButton} />

          </View>
          <View style={styles.row}>
              <Button title="/" onPress={() => handlePress('/')} style={styles.operationButton} />
              <Button title="√" onPress={handleSquareRoot} style={styles.operationButton} />
              <Button title="x²" onPress={handleSquare} style={styles.operationButton} />
          </View>
          <View style={styles.row}>
              <Button title="C" onPress={handleClear} style={styles.specialButton} />
              <Button title="=" onPress={handleCalculate} style={styles.specialButton} />

          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    defaultButton: {
        height: 75, 
    }, operationButton: {
        height: 75, backgroundColor: '#4CAF50', 
    }, specialButton: {
        height: 75, backgroundColor: '#FF5722', 
    },
});

export default CalculatorScreen;
