import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface FabProps {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: FabProps) => {
  return (
    <TouchableOpacity
      style={ [ styles.fabLocation, 
        position === 'br'
          ? styles.right
          : styles.left
      ] }
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  left: {
    left: 20,
  },
  right: {
    right: 20,
  },
  fab: {
    backgroundColor: '#2998e6',
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
