import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Contacts = ({ heading = 'Name', contacts = [] }) => {
  const isContactsLengthGreaterThan0 = contacts.length > 0
  const contactsToDisplay = isContactsLengthGreaterThan0 ? (
    contacts.map(item => (
      <TouchableOpacity>
        <View testID='contact-item'>{item.name}</View>
      </TouchableOpacity>
    ))
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
