import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Contacts = ({ heading = 'Name', contacts = [] }) => {
  const isContactsLengthGreaterThan0 = contacts.length > 0
  const contactsToDisplay = isContactsLengthGreaterThan0 ? (
    ''
  ) : (
    <Text>No contacts to display</Text>
  )
  return (
    <View>
      <Text>{heading}</Text>
      {contactsToDisplay}
    </View>
  )
}

export default Contacts
