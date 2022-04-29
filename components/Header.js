import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Header = ({title="Contacts" , searchBar=true,addButton=true }) => {
  const [searchText,setSearchText] = useState('')
  const onChangeSearchText=(e)=>{
    setSearchText(e.target.value)
  }
  return (<View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <View>
      {searchBar && <TextInput testID="search-bar"  
        onChangeText={onChangeSearchText}
        value={searchText}
        placeholder="Search contacts..."/>}
    </View>
      {addButton && <Icon name="plus" fontSize={20} testID="add-btn"/>}
  </View>)
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
