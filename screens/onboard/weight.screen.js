import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Picker from '../../components/picker'
import UserContext from '../../components/UserContext'
import { weights } from '../../data/data'

const WeightScreen = ({ screenScroll }) => {
  const { setWeight } = useContext(UserContext)
  const [selectedWeight, setSelectedWeight] = useState(60)

  const nextScreen = () => {
    setWeight(selectedWeight)
    screenScroll(3)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Weight</Text>
      <Text style={styles.heading}>Select here please.</Text>

      <Picker
        items={weights}
        value={selectedWeight}
        handlePick={(val) => setSelectedWeight(val)}
        style={{ marginTop: 20 }}
      />

      <Pressable style={styles.button} onPress={nextScreen}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => screenScroll(1)}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </View>
  )
}

export default WeightScreen

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
  },
  backButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1
  },
  backButtonText: {
    fontSize: 12,
    color: 'coral',
    fontWeight: '600',
    textTransform: 'uppercase'
  }
})
