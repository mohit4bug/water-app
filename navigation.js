import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardScreen from './screens/onboard'
import HomeScreen from './screens/home.screen'
import { useContext } from 'react'
import UserContext from './components/UserContext'

const Navigation = () => {
  const Stack = createNativeStackNavigator()
  const { data } = useContext(UserContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {data.onBoardDone ? (
          <Stack.Screen
            name='home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name='onboard'
            component={OnboardScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
