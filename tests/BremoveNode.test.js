const B=require('../base')

describe('test B.removeNode',()=>{
  test('一个父组件=>一个子组件',()=>{
    document.body.innerHTML='<div id="wrapper"><ul></ul></div>'

    const wrapper=document.querySelector('#wrapper')
    expect(wrapper.nodeName.toLowerCase()).toBe('div')
    const ul=document.querySelector('ul')
    B.removeNode(ul)
    expect(document.querySelector('ul')).toBeNull()
  })
  test('一个祖父组件=>一个父组件=>一个子组件',()=>{
    document.body.innerHTML='<div id="wrapper"><ul><li></li></ul></div>'

    const wrapper=document.querySelector('#wrapper')
    expect(wrapper.nodeName.toLowerCase()).toBe('div')
    const ul=document.querySelector('ul')
    B.removeNode(ul)
    expect(document.querySelector('li')).toBeNull()
  })
  test('一个祖父组件=>一个父组件=>一个子组件',()=>{
    document.body.innerHTML='<div id="wrapper"><ul><li></li></ul></div>'

    const wrapper=document.querySelector('#wrapper')
    expect(wrapper.nodeName.toLowerCase()).toBe('div')
    B.removeNode(wrapper)
    expect(document.querySelector('li')).toBeNull()
  })
  test('非DOM',()=>{
    expect(B.removeNode(null)).toBeNull()
    expect(B.removeNode([1,2,3])).toBeNull()
    expect(B.removeNode('hello')).toBeNull()
    expect(B.removeNode({name:'<div></div>'})).toBeNull()
    expect(B.removeNode(()=>{
      return true
    })).toBeNull()
  })
})
