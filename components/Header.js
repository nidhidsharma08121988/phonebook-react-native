import React from 'react'
import {View, Text} from 'react-native'

const Header = ({title="" , searchBar=true,addButton=true }) => {
  return <View><Text>{title}</Text></View>
}

export default Header
