const B=require('../base')

describe('htmlEncode', () => {
  const htmlEncode = B.htmlEncode
  test('test true', () => {
    const sourceText = '<script></script>'
    expect(htmlEncode(sourceText)).toBe('&lt;script&gt;&lt;/script&gt;')
  })
  test('test false', () => {
    expect(htmlEncode(undefined)).toBeFalsy()
    expect(htmlEncode([])).toBeFalsy()
    expect(htmlEncode({})).toBeFalsy()
    expect(htmlEncode(1)).toBeFalsy()
    expect(htmlEncode(true)).toBeFalsy()
    expect(htmlEncode(null)).toBeFalsy()
  })
})
