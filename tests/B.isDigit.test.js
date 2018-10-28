const B=require('../base')
describe('test B.isDigit',()=>{
  test('isDigit',()=>{
    expect(B.isDigit('123')).toBe(true)
    expect(B.isDigit('12s3')).toBe(false)
  })
})


