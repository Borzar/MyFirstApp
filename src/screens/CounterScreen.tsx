import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.constainer}>
      <Text style={styles.text}>Contador: {counter}</Text>
      <Fab
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position='bl'
      />
      <Fab
        title="+1"
        onPress={() => setCounter(counter + 1)}
        position='br'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
