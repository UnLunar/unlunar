const B = require('../base')
describe('test B.serialize', () => {
  test('serialize({k:v})', () => {
    expect(B.serialize({hello: 'js'})).toBe('hello=js')
  })

  test('serialize({k:v,k:v})', () => {
    expect(B.serialize({hello: 'js', hi: 'test'})).toBe('hello=js&hi=test')
  })

  test('serialize({k:v,k:{k:v,k:v}})', () => {
    expect(B.serialize({hello: 'js', hi: {haha: 'haha', hahaha: 'hahaha'}})).
      toBe('hello=js&haha=haha&hahaha=hahaha')
  })

  test('serialize({k:v,k:{k:v,k:v},k:{k:v,k:v}})', () => {
    expect(B.serialize({
      hello: 'js',
      hi: {haha: 'haha', haha2: 'haha2'},
      what: {what1: 'what1', what2: 'what2'},
    })).
      toBe('hello=js&haha=haha&haha2=haha2&what1=what1&what2=what2')
  })

  test('serialize({k:v,k:{k:{k:v,k:v},k:v},k:{k:v,k:v}})', () => {
    expect(B.serialize({
      hello: 'js',
      hi: {haha: 'haha', haha2: {ye: 'ye', ye2: 'ye2'}},
      what: {what1: 'what1', what2: 'what2'},
    })).toBe('hello=js&haha=haha&ye=ye&ye2=ye2&what1=what1&what2=what2')
  })

  test('serialize({k:v,k:[1,2,3]})', () => {
    expect(B.serialize({name: 'tom', 'class': [1, 2, 3]}))
    .toBe('name=tom&class=1,2,3')
  })

  test('serialize(null)', () => {
    expect(B.serialize(null)).toBeNull()
  })

  test('serialize({null:null})', () => {
    expect(B.serialize({null:null})).toBe('null=')
  })

  test('serialize({null:null})', () => {
    expect(B.serialize(()=>{return {k:'v'}})).toBe('')
  })
})


