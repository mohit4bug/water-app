import React, { useContext } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import UserContext from '../../components/UserContext'

const FinalScreen = ({}) => {
  const { data, setOnBoardDone } = useContext(UserContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results 🎉</Text>
      <Text style={styles.heading}>
        {data.waterIntakeInLitres + ' Litres'}{' '}
      </Text>
      <Pressable style={styles.button} onPress={() => setOnBoardDone()}>
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>
    </View>
  )
}

export default FinalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    color: '#555',
    marginTop: 20,
    textAlign: 'center'
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
