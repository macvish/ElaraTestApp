import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

import { ListItem } from '../'


export const CustomList = ({ data }) => {
  const renderItem = ({ item }) => {
    return <ListItem name={item.name} />
  }

  const renderSectionHeader = ({ section }) => {
    return <View style={styles.sectionHeaderWrapper}>
      <Text style={styles.sectionHeader}>{section.letter}</Text>
    </View>
  }

  return (
    <View>
      <SectionList
        sections={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        renderSectionHeader={renderSectionHeader}
        extraData={data}
        stickySectionHeadersEnabled
        SectionSeparatorComponent={() => <View style={{ height: 3, backgroundColor: '#D2D2D2' }}></View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeaderWrapper: {
    backgroundColor: '#45caff',
    position: 'absolute',
    alignSelf: 'flex-end',
    width: 35,
    marginTop: 15,
    right: 15,
    borderRadius: 3
  },

  sectionHeader: {
    fontSize: 25,
    textAlign: 'center'
  }
})
