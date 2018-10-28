const B = require('../base')

describe('removeItemByIndex', () => {
  test('index 0, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(0, [1, 2, 3, 4, 5])
    expect(ret).toEqual([2, 3, 4, 5])
  })

  test('index 2, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(2, [1, 2, 3, 4, 5])
    expect(ret).toEqual([1, 2, 4, 5])
  })

  test('index 4, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(4, [1, 2, 3, 4, 5])
    expect(ret).toEqual([1, 2, 3, 4])
  })

  test('index -1, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(-1, [1, 2, 3, 4, 5])
    expect(ret).toEqual([1, 2, 3, 4])
  })

  test('index -3, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(-3, [1, 2, 3, 4, 5])
    expect(ret).toEqual([1, 2, 4, 5])
  })

  test('index 非数字, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(null, [1, 2, 3, 4, 5])
    expect(ret).toBeUndefined()
  })

  test('index为正 超过数组长度, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(5, [1, 2, 3, 4, 5])
    expect(ret).toBeNull()
  })

  test('index为负 超过数组长度, 数组[1,2,3,4,5]', () => {
    const ret = B.removeItemByIndex(-6, [1, 2, 3, 4, 5])
    expect(ret).toBeNull()
  })

  test('index 0，非数组', () => {
    const ret = B.removeItemByIndex(0, {})
    expect(ret).toEqual({})
  })

  test('index 0，非数组', () => {
    const ret = B.removeItemByIndex(0, {})
    expect(ret).toEqual({})
  })

  test('非数字，数组', () => {
    const ret = B.removeItemByIndex('123', [1,2,3,4,5])
    expect(ret).toBeUndefined()
  })

  test('非数字，非数组', () => {
    const ret = B.removeItemByIndex('123', '123')
    expect(ret).toEqual('123')
  })
})


