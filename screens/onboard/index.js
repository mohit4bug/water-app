import { ScrollView, View, StyleSheet, Dimensions } from 'react-native'
import WelcomeScreen from './welcome.screen'
import GenderScreen from './gender.screen'
import WeightScreen from './weight.screen'
import WakupScreen from './wakeup.screen'
import BedtimeScreen from './bedtime.screen'
import { useRef } from 'react'
import FinalScreen from './final.screen'

const OnboardScreen = () => {
  const scrollViewRef = useRef(null)
  const screenWidth = Dimensions.get('window').width

  const handleScrollToScreen = (screenIndex) => {
    const screenWidth = Dimensions.get('window').width
    // offset
    const offset = screenWidth * screenIndex
    scrollViewRef.current.scrollTo({ x: offset, animated: true })
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    >
      <View style={[styles.container, { width: screenWidth }]}>
        <WelcomeScreen screenScroll={handleScrollToScreen} />
      </View>
      <View style={[styles.container, { width: screenWidth }]}>
        <GenderScreen screenScroll={handleScrollToScreen} />
      </View>
      <View style={[styles.container, { width: screenWidth }]}>
        <WeightScreen screenScroll={handleScrollToScreen} />
      </View>
      <View style={[styles.container, { width: screenWidth }]}>
        <WakupScreen screenScroll={handleScrollToScreen} />
      </View>
      <View style={[styles.container, { width: screenWidth }]}>
        <BedtimeScreen screenScroll={handleScrollToScreen} />
      </View>
      <View style={[styles.container, { width: screenWidth }]}>
        <FinalScreen screenScroll={handleScrollToScreen} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default OnboardScreen
