import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from '../../components'

export const ProfessionScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})
