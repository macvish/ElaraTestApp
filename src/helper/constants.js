export const sorter = (firtValue, secondValue) => {
  if (firtValue > secondValue) return 1
  if(secondValue > firtValue) return -1
}

export const groupAlpabetically = (accumulator, currentValue, currentObject) => {
  let letter = currentValue[0]

  if (!accumulator[letter]) accumulator[letter] = { letter, data: [currentObject] }
  else accumulator[letter].data.push(currentObject)

  return accumulator
}

export const getInitials = (word) => {
  const initials = `${word[0]}${word[1]}`
  return initials.toUpperCase()
}
