import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ContactContext } from '../store/ContactState'

const Contacts = ({ heading = 'Name' }) => {
  const { contacts } = useContext(ContactContext)
  const [localContactsState, setLocalContactsState] = useState([])
  useEffect(() => {
    setLocalContactsState(contacts)
  }, [contacts])

  const isContactsLengthGreaterThan0 =
    localContactsState && localContactsState.length > 0
  const contactsToDisplay = isContactsLengthGreaterThan0 ? (
    localContactsState.map(item => (
      <TouchableOpacity key={item.id}>
        <View testID='contact-item'>
          <Text>{item.name}</Text>
        </View>
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
