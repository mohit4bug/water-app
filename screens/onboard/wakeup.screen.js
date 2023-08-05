import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Picker from '../../components/picker'
import UserContext from '../../components/UserContext'
import { hours, minutes } from '../../data/data'

const WakupScreen = ({ screenScroll }) => {
  const { setWakeupTime } = useContext(UserContext)

  const [hour, setHour] = useState(7)
  const [minute, setMinute] = useState(0)

  const nextScreen = () => {
    setWakeupTime(hour.toString() + ' ' + minute.toString())
    screenScroll(4)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wake up time</Text>
      <Text style={styles.heading}>Select here please.</Text>

      <View style={styles.timePicker}>
        <Picker items={hours} value={hour} handlePick={setHour} />
        <Text style={{ fontSize: 20 }}>:</Text>
        <Picker items={minutes} value={minute} handlePick={setMinute} />
      </View>

      <Pressable style={styles.button} onPress={nextScreen}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => screenScroll(2)}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </View>
  )
}

export default WakupScreen

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
    color: '#333'
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    color: '#555',
    marginTop: 20
  },
  timePicker: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
    alignItems: 'center'
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
