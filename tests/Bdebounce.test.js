const B = require('../base')

describe('debounce', () => {
  test('检测累加结果', (done) => {
    let total = 0
    const debounce = B.debounce(() => {
      total += 1
      expect(total).toBe(1)
      done()
    }, 200)

    for (let i = 0; i < 100; i++) {
      debounce()
    }
    expect(total).toBe(0) // 调用一百次 debouce ，马上检测 total
  })

  test('检测累加结果,时间使用默认值', (done) => {
    let total = 0
    const debounce = B.debounce(() => {
      total += 1
      expect(total).toBe(1)
      done()
    })

    for (let i = 0; i < 100; i++) {
      debounce()
    }
    expect(total).toBe(0) // 调用一百次 debouce ，马上检测 total
  })

})
