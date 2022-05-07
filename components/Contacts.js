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
      <TouchableOpacity key={item.id} style={styles.contactItemContainer}>
        <View testID='contact-item' style={styles.contactItem}>
          <Text style={styles.contactName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ))
  ) : (
    <Text>No contacts to display</Text>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      {contactsToDisplay}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 5,
  },
  heading: {
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 15,
  },
  contactItemContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
})

export default Contacts
