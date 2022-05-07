import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Header = ({ title = 'Contacts' }) => {
  const [search, setSearch] = useState('')
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightHeader}>
        <TextInput
          testID='search-bar'
          style={styles.search}
          value={search}
          onChangeText={setSearch}
          placeholder='Search contacts...'
        />
        <Icon
          name='plus'
          fontSize={20}
          testID='add-btn'
          color='white'
          style={styles.addIcon}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#4863A0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
    width: 90,
    maxWidth: 90,
    textAlign: 'left',
    padding: 2,
    margin: 5,
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: 180,
    marginRight: 5,
  },
  search: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 5,
  },
  addIcon: {
    fontSize: 16,
    padding: 5,
    marginLeft: 5,
  },
})

export default Header
