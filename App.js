import React from 'react'
import { View, StyleSheet } from 'react-native'
import Contacts from './components/Contacts'
import Header from './components/Header'
import ContactState from './store/ContactState'

const App = () => {
  return (
    <ContactState>
      <View style={styles.container}>
        <Header />
        <Contacts />
      </View>
    </ContactState>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
