//표현신, 할당문, 선언문
let b// 선언문
b = 2// 표현식, 할당문

let a = (b = 2)
console.log(a)

{
// 할당연산자(Assigment)
let a = 1
a = a + 2
console.log(a)//3

a += 2
console.log(a)//5

a += a
console.log(a)//10
}

{
  // 동등 비교 관계 연산자(Equality operators)
  // == 값이 같음
  // != 값이 다름
  // === 값과 타입이 둘다 같음
  // !== 값과 타입이 다름
  const obj1 = {
    name: 'js'
  }
  const obj2 = {
    name: 'js'
  }
  console.log(obj1 == obj2)//false
  console.log(obj1 === obj2)//false
  console.log(obj1.name == obj2.name)//true
  console.log(obj1.name === obj2.name)//true
  
  let obj3 = obj2
  console.log(obj3 == obj2)//true 둘은 같은 주소번지를 가짐
  console.log(obj3 === obj2)//true  둘은 타입도 같고, 값도 같다
}