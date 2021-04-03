import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'

import { getInitials } from '../../helper/constants'

export const ListItem = ({ name }) => {
  return (
    <View style={styles.listItemContainer}>
      <Avatar.Text
        label={getInitials(name)}
        size={35}
        labelStyle={styles.avatarLabelStyle}
      />
      <Text style={styles.title}>{name.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1.2,
    borderColor: '#D2D2D2'
  },

  avatarLabelStyle : {
    fontWeight: '700'
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 10
  }
})
