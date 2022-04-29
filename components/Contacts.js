import React from 'react'
import { View, Text } from 'react-native'

const Contacts = ({ heading = 'Name', contacts = [] }) => {
  return (
    <View>
      <Text>{heading}</Text>
    </View>
  )
}

export default Contacts
