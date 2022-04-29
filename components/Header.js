import { SearchSource } from 'jest'
import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const Header = ({title="Contacts" , searchBar=true,addButton=true }) => {
  
  const [searchText,setSearchText] = useState('')
  const onChangeSearchText=(e)=>{
    setSearchText(e.target.value)
  }
  return <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <View>
      <TextInput testID="search-bar"  
        onChangeText={onChangeSearchText}
        value={searchText}
        placeholder="Search contacts..."/>
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
