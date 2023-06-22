const paginateArray = <T>(array: T[], page: number, count: number): T[] => {
  const startIndex = page * count
  const endIndex = startIndex + count

  if (startIndex >= array.length) {
    throw new Error('Page index is out of bounds.')
  }

  return array.slice(startIndex, endIndex)
}

export default paginateArray
