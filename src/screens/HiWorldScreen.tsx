import {Text, View} from "react-native"

export const HiWorldScreen = () => {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      }}>
      <Text style={{ 
        fontSize: 55,
        textAlign: 'center',
        }}
      >
      Hola Mundo
      </Text>
    </View>
  )
}
