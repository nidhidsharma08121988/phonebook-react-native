import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Contacts = ({ heading = 'Name', contacts = [] }) => {
  return (
    <View>
      <Text>{heading}</Text>
    </View>
  )
}

export default Contacts
