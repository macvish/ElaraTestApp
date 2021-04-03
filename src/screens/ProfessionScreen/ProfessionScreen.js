import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { CustomList, Header } from '../../components'
import occupations from '../../helper/occupations.json'
import { sorter, groupAlpabetically} from '../../helper/constants'

export const ProfessionScreen = () => {
  const sortedOccupations = occupations.sort((firstValue, secondValue) => sorter(firstValue.name, secondValue.name))
  const groupedOccupations = Object.values(sortedOccupations.reduce((a, b) => groupAlpabetically(a, b.name, b), {}))
  const [profession, setProfession] = useState(groupedOccupations)
  const [searchParam, setSearchParam] = useState(null)

  useEffect(() => {
    console.log(profession)
  }, [profession])

  const handleSearch = e => {
    setSearchParam(e)
    if(e == '')
    {
      setProfession(groupedOccupations)
    } else {
      setProfession(groupedOccupations)
      // setProfession(prevState => prevState.filter((value, index) => value.data.name.toLowerCase().match(e.toLowerCase())))
      console.log(profession.filter((value, index) => value.data.name.toLowerCase().match(e.toLowerCase())))
    }
  }

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} searchValue={searchParam} />
      <CustomList data={profession} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
})
