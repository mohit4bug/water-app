import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    loadData()
  }, [])

  // util func
  const saveData = async (newData) => {
    try {
      await AsyncStorage.setItem('@UserData', JSON.stringify(newData))
      setData(newData)
    } catch (error) {
      console.log('Save Error')
    }
  }
  // state func
  const setGender = (gender) => {
    saveData({ ...data, gender })
  }

  const setWeight = (weight) => {
    saveData({ ...data, weight })
  }
  // state func
  const setWakeupTime = (wakeupTime) => {
    saveData({ ...data, wakeupTime })
  }
  // state func
  const setBedTime = (bedTime) => {
    saveData({ ...data, bedTime })
  }
  // state func
  const setWaterIntake = () => {
    const amountInLitres = calculateWaterIntakeInLitres()
    saveData({ ...data, waterIntakeInLitres: amountInLitres })
  }

  // state func
  const setOnBoardDone = () => {
    saveData({ ...data, onBoardDone: true })
  }
  // dev purpose
  const setOnBoardUndone = () => {
    saveData({ ...data, onBoardDone: false })
  }

  // util func
  const calculateWaterIntakeInLitres = () => {
    const { weight, gender } = data
    const genderMultiplier = gender === 'male' ? 0.035 : 0.031

    let waterIntakeInLitres = weight * genderMultiplier

    // waterIntakeInLitres += 0.5

    return waterIntakeInLitres
  }

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@UserData')
      setData(storedData ? JSON.parse(storedData) : {})
    } catch (error) {
      console.log('Data Error')
    }
  }

  return (
    <UserContext.Provider
      value={{
        data,
        setGender,
        setWeight,
        setWakeupTime,
        setBedTime,
        setWaterIntake,
        setOnBoardDone,
        setOnBoardUndone
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
