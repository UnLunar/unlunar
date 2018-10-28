const B=require('../base')

describe('URLEncode', () => {
  const URLEncode = B.URLEncode
  test('test true', () => {
    const sourceText = 'http://www.w3school.com.cn/My first/'
    expect(URLEncode(sourceText)).toBe('http://www.w3school.com.cn/My%20first/')
  })
  test('test false', () => {
    expect(URLEncode(undefined)).toBeFalsy()
    expect(URLEncode([])).toBeFalsy()
    expect(URLEncode({})).toBeFalsy()
    expect(URLEncode(1)).toBeFalsy()
    expect(URLEncode(true)).toBeFalsy()
    expect(URLEncode(null)).toBeFalsy()
  })
})
