const B=require('../base')

describe('test B.insertAfter',()=>{
  test('插入一个DOM节点',()=>{
    document.body.innerHTML='<div id="div"></div>'

    const div=document.querySelector('#div')
    const p=document.createElement('p')
    B.insertAfter(p,div)
    expect(p.parentNode).toBe(div)
  })

  test('插入一个Text节点',()=>{
    document.body.innerHTML='<div id="div"></div>'

    const div=document.querySelector('#div')
    const p=document.createTextNode('pppp')
    B.insertAfter(p,div)
    expect(p.parentNode).toBe(div)
  })

  test('插入一个DOM节点（俄罗斯套娃）',()=>{
    document.body.innerHTML='<div id="div"></div>'

    const div=document.querySelector('#div')
    const p1=document.createElement('p')
    const p2=document.createElement('p')
    B.insertAfter(p1,p2)
    expect(p1.parentNode).toBe(p2)
    B.insertAfter(p2,div)
    expect(p2.parentNode).toBe(div)
  })

  test('插入一个DOM节点（俄罗斯套娃）',()=>{
    document.body.innerHTML='<div id="div"></div>'

    const div=document.querySelector('#div')
    const p1=document.createElement('p')
    const p2=document.createElement('p')
    B.insertAfter(p1,p2)
    expect(p1.parentNode).toBe(p2)
    B.insertAfter(p2,div)
    expect(p2.parentNode).toBe(div)
  })

  test('非法参数传入',()=>{
    document.body.innerHTML='<div id="div"></div>'
    const div=document.querySelector('#div')
    const p2=document.createElement('p')

    expect(B.insertAfter([],p2)).toBeNull()
    expect(B.insertAfter(div,[])).toBeNull()
    expect(B.insertAfter([])).toBeNull()
    expect(B.insertAfter(div,123)).toBeNull()
    expect(B.insertAfter(123,123)).toBeNull()
    expect(B.insertAfter(p2,div)).toBe(true)
  })
})
