import { useContext } from 'react'
import { View, Text } from 'react-native'
import UserContext from '../components/UserContext'

const HomeScreen = () => {
  const { setOnBoardUndone } = useContext(UserContext)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => setOnBoardUndone()}>RESET</Text>
    </View>
  )
}

export default HomeScreen
