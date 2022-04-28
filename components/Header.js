import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const Header = ({title="Contacts" , searchBar=true,addButton=true }) => {
  return <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <View>
      <TextInput testID="search-bar"/>
    </View>
</View>
}

const styles= StyleSheet.create({
  header:{
    padding:10,
    backgroundColor: '#4863A0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  title:{
    color:'white',
    fontSize: 22,
  }
})

export default Header
