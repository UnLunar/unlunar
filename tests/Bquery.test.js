const B=require('../base')
describe('test B.query',()=>{
  test('query',()=>{
    expect(B.query('hello','?hello=test')).toBe('test')
    expect(B.query('hello','?hello=')).toBe('')
    expect(typeof B.query('hello','?hello2=test')).toBe('undefined')
    expect(B.query('hello','?hello=test&hello2=3')).toBe('test')
    expect(B.query('hello','?hello=&hello2=3')).toBe('')
    expect(typeof B.query('hello','?')).toBe('undefined')
    expect(B.query('hello-test','?hello-test=test')).toBe('test')
    expect(B.query('hello/test','?hello/test=test')).toBe('test')
  })
})


