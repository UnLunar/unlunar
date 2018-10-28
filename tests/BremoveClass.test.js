const B=require('../base')

describe('test B.removeClass',()=>{
  test('给一个原有一个class的元素删除一个class',()=>{
    document.body.innerHTML='<a id="a" class="cls" href=""></a>>'
    let a=document.getElementById('a')
    B.removeClass(a,'cls')
    expect(a.className).toBe('')
  })

  test('给一个原有两个class的元素删除一个class',()=>{
    document.body.innerHTML='<a id="a" class="cls1 cls2" href=""></a>>'
    let a=document.getElementById('a')
    B.removeClass(a,'cls1')
    expect(a.className).toBe('cls2')
  })

  test('给一个原有两个class的元素删除两个class',()=>{
    document.body.innerHTML='<a id="a" class="cls1 cls2" href=""></a>>'
    let a=document.getElementById('a')
    B.removeClass(a,['cls1','cls2'])
    expect(a.className).toBe('')
  })

  test('给一个原没有class的元素删除一个class',()=>{
    document.body.innerHTML='<a id="a" href=""></a>>'
    let a=document.getElementById('a')
    B.removeClass(a,'cls')
    expect(a.className).toBe('')
  })

  test('给一个原class有空格的元素删除一个class',()=>{
    document.body.innerHTML='<a id="a" class="  cls1   cls2  cls3  " href=""></a>>'
    let a=document.getElementById('a')
    B.removeClass(a,'cls2')
    expect(a.className).toBe('cls1 cls3')
  })

  test('B.removeClass(DOM,非字符串)',()=>{
    document.body.innerHTML='<a id="a" class="a1 a2" href=""></a>>'
    let a=document.getElementById('a')
    expect(B.removeClass(a,[])).toBe(undefined)
  })

  test('B.removeClass(非DOM,字符串)',()=>{
    expect(B.removeClass([],'cls')).toBe(undefined)
  })

  test('B.removeClass(null,字符串)',()=>{
    expect(B.removeClass(null,'cls')).toBeNull()
  })

  test('B.removeClass(DOM,nul)',()=>{
    document.body.innerHTML='<a id="a" class="a1 a2" href=""></a>>'
    let a=document.getElementById('a')
    expect(B.removeClass(a,null)).toBeNull()
  })
})
