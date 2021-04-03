import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Header = ({ onSearch, searchValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Icon name="times" style={styles.closeIcon} />
        <Text style={styles.title}>Profession</Text>
      </View>
      <TextInput
        style={styles.SearchInput}
        onChangeText={e => onSearch(e)}
        value={searchValue}
        left={
          <TextInput.Icon name={() => <Icon name="search" style={styles.searchIcon} />} />
        }
        placeholder="Search"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: '#0061ff',
    padding: 15,
    paddingTop: 25,
  },

  titleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    flex: 2,
    fontSize: 20,
    fontWeight: '600'
  },

  closeIcon: {
    flex: 1,
    fontSize: 20
  },

  SearchInput: {
    height: 55,
    marginTop: 10
  },

  searchIcon: {
    fontSize: 13,
    paddingTop: 3
  }
})
