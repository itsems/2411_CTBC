export const isUpOrDownClass = value => {
  const number = parseFloat(value)
  if (number > 0) return 'is-up'
  else if (number < 0) return 'is-down'
  else return 'is-same'
}
