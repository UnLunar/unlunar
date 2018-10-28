const B=require('../base')

describe('filter', () => {
  const filter = B.filter
  test('test true', () => {
    const sourceText = '<script>alert</script><a href="a.com" onclick="alert(1)">test</a>'
    expect(filter(sourceText)).toBe('<a href="a.com" >test</a>')
  })
  test('test false', () => {
    expect(filter(undefined)).toBeFalsy()
    expect(filter([])).toBeFalsy()
    expect(filter({})).toBeFalsy()
    expect(filter(1)).toBeFalsy()
    expect(filter(true)).toBeFalsy()
    expect(filter(null)).toBeFalsy()
  })
})
