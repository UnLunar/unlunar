const B = require('../base')

describe('getAbsoluteUrl', () => {
  test('普通单词', () => {
    const ret = B.getAbsoluteUrl('adam')
    expect(ret).toBe('http://localhost/adam')
  })
  test('普通单词加/', () => {
    const ret = B.getAbsoluteUrl('adam/person')
    expect(ret).toBe('http://localhost/adam/person')
  })
  test('///', () => {
    const ret = B.getAbsoluteUrl('///')
    expect(ret).toBe('http://localhost////')
  })
  test('[1,2,3]', () => {
    const ret = B.getAbsoluteUrl('[1,2,3]')
    expect(ret).toBe('http://localhost/[1,2,3]')
  })
  test('null', () => {
    const ret = B.getAbsoluteUrl(null)
    expect(ret).toBe(false)
  })
})


