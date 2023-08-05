import { View, Text, StyleSheet, Pressable } from 'react-native'

const WelcomeScreen = ({ screenScroll }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.heading}>Welcome, I am Aquasol</Text>
      <Text style={styles.desc}>
        Your Personal Hydration Assistant. We'll be with you every step of the
        way, encouraging you to drink enough water.
      </Text>
      <Pressable style={styles.button} onPress={() => screenScroll(1)}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f7f7f7'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333'
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    color: '#555',
    marginTop: 20
  },
  desc: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 25,
    color: '#888'
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'coral',
    borderRadius: 30,
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    textTransform: 'uppercase'
  }
})
