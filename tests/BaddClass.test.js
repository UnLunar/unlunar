const B=require('../base')

describe('test B.addClass',()=>{
  test('给一个原没有class的元素添加一个class',()=>{
    document.body.innerHTML='<a id="a" href=""></a>>'
    let a=document.getElementById('a')
    B.addClass(a,'cls')
    expect(a.className).toBe('cls')
  })

  test('给一个原没有class的元素添加两个class',()=>{
    document.body.innerHTML='<a id="a" href=""></a>>'
    let a=document.getElementById('a')
    B.addClass(a,['cls1','cls2'])
    expect(a.className).toBe('cls1 cls2')
  })

  test('给一个原来有两个class的元素添加两个class',()=>{
    document.body.innerHTML='<a id="a" class="a1 a2" href=""></a>>'
    let a=document.getElementById('a')
    B.addClass(a,['cls1','cls2'])
    expect(a.className).toBe('a1 a2 cls1 cls2')
  })

  test('B.addClass(DOM,非字符串)',()=>{
    document.body.innerHTML='<a id="a" class="a1 a2" href=""></a>>'
    let a=document.getElementById('a')
    expect(B.addClass(a,[])).toBe(undefined)
  })

  test('B.addClass(非DOM,字符串)',()=>{
    expect(B.addClass([],'cls')).toBe(undefined)
  })

  test('B.addClass(null,字符串)',()=>{
    expect(B.addClass(null,'cls')).toBeNull()
  })

  test('B.addClass(DOM,nul)',()=>{
    document.body.innerHTML='<a id="a" class="a1 a2" href=""></a>>'
    let a=document.getElementById('a')
    expect(B.addClass(a,null)).toBeNull()
  })
})
