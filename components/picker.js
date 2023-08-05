import { Picker as RNPicker } from '@react-native-picker/picker'
import { StyleSheet, View } from 'react-native'

const Picker = ({ value, handlePick, items, style }) => {
  return (
    <View style={[styles.pickerContainer, style]}>
      <RNPicker
        selectedValue={value}
        onValueChange={handlePick}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {items.map((item) => (
          <RNPicker.Item
            label={item.label}
            value={item.value}
            key={item.value}
            style={styles.pickerItem}
          />
        ))}
      </RNPicker>
    </View>
  )
}

export default Picker

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: 'coral',
    borderWidth: 2,
    borderRadius: 30,
    overflow: 'hidden',
    height: 60,
    width: 'auto'
  },
  picker: {
    minWidth: 130
  },
  pickerItem: {
    fontSize: 18,
    color: 'black'
  }
})
