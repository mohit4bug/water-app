import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import UserContext from '../../components/UserContext'

const GenderOption = ({ gender, selectedGender, onPress }) => {
  return (
    <Pressable
      style={[
        styles.gender,
        { borderColor: gender === selectedGender ? 'coral' : 'transparent' }
      ]}
      onPress={() => onPress(gender)}
    >
      <Image
        source={
          gender === 'male'
            ? require('../../assets/male.png')
            : require('../../assets/female.png')
        }
        style={styles.genderImage}
      />
    </Pressable>
  )
}

const GenderScreen = ({ screenScroll }) => {
  const { setGender } = useContext(UserContext)
  const [selectedGender, setSelectedGender] = useState('male')

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender)
  }

  const nextScreen = () => {
    setGender(selectedGender)
    screenScroll(2)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your gender</Text>
      <Text style={styles.heading}>Choose one please.</Text>
      <View style={{ flexDirection: 'row', gap: 30, marginTop: 20 }}>
        <GenderOption
          gender='male'
          selectedGender={selectedGender}
          onPress={handleGenderSelection}
        />
        <GenderOption
          gender='female'
          selectedGender={selectedGender}
          onPress={handleGenderSelection}
        />
      </View>
      <Pressable style={styles.button} onPress={nextScreen}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => screenScroll(0)}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </View>
  )
}

export default GenderScreen

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
  gender: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    position: 'relative',
    overflow: 'hidden'
  },
  genderImage: {
    height: '105%',
    width: '105%',
    borderRadius: 50
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
