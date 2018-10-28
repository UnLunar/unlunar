const B=require('../base')

describe('JavaScriptEncode', () => {
  const JavaScriptEncode = B.JavaScriptEncode
  test('test true', () => {
    const sourceText1 = '<script>alert</script><a href="a.com" onclick="alert(1)">test</a>'
    const sourceText2 = '\n,\r,\,\&,\\,\t,\''
    expect(JavaScriptEncode(sourceText1)).toBe('\\x3Cscript\\x3Ealert\\x3C\\x2Fscript\\x3E\\x3Ca href=\\x22a.com\\x22 onclick=\\x22alert(1)\\x22\\x3Etest\\x3C\\x2Fa\\x3E')
    expect(JavaScriptEncode(sourceText2)).toBe("\\n,\\r,,\\&,\\\\,\\t,\\'")
  })
  test('test false', () => {
    expect(JavaScriptEncode(undefined)).toBeFalsy()
    expect(JavaScriptEncode([])).toBeFalsy()
    expect(JavaScriptEncode({})).toBeFalsy()
    expect(JavaScriptEncode(1)).toBeFalsy()
    expect(JavaScriptEncode(true)).toBeFalsy()
    expect(JavaScriptEncode(null)).toBeFalsy()
  })
})
