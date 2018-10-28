const B=require('../base')

describe('test B.$',()=>{
  test('$(id)',()=>{
    document.body.innerHTML='<div id="wrapper"><ul></ul></div>'
    const div=document.querySelector('#wrapper')
    const Bdiv=B.$('#wrapper')
    expect(Bdiv).toBe(div)
  })
  test('$(tag)',()=>{
    document.body.innerHTML='<div id="wrapper"><ul><li></li><li></li><li></li></ul></div>'
    const aLi=document.querySelectorAll('li')
    const aBli=B.$('li')
    expect(aBli).toBe(aLi)
  })
  test('$(class)',()=>{
    document.body.innerHTML='<div id="wrapper" class="cls"><ul><p class="li"></p><li class="cls"></li><h1 class="cls"></h1></ul></div>'
    const aCls=document.querySelectorAll('.cls')
    const aBCls=B.$('.cls')
    expect(aBCls).toBe(aCls)
  })
  test('$([k:v])',()=>{
    document.body.innerHTML='<div id="div3" -jing="-sha">div3</div>\n' +
      '<div id="div4" hh="hh"><p class="-gi__-123">p</p></div>'
    const tag1=document.querySelector('[hh=hh]')
    const tag2=document.querySelector('[-jing=-sha]')
    const aTag1=B.$('[hh=hh]')
    const aTag2=B.$('[-jing=-sha]')
    expect(aTag1).toBe(tag1)
    expect(aTag2).toBe(tag2)
  })
  test('$(class)len===1',()=>{
    document.body.innerHTML='<div id="div"  class="div"></div>'
    const tag=document.querySelector('.div')
    const aTag=B.$('.div')
    expect(aTag).toBe(tag)
  })
  test('$(unlawfulness)',()=>{
    expect(B.$(' ')).toBeNull()
    expect(B.$('..div')).toBeNull()
    expect(B.$('#div#div')).toBeNull()
    expect(B.$('#')).toBeNull()
    expect(B.$('.')).toBeNull()
    expect(B.$('[=]')).toBeNull()
    expect(B.$(null)).toBeNull()
    expect(B.$([1,2,3])).toBeNull()
    expect(B.$({k:'v'})).toBeNull()
    expect(B.$(undefined)).toBeNull()
  })
})
