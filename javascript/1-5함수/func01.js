//함수
{
  console.log('=======================[[ 함수 ]]========================')
  function add(a,b){
    const result = a + b
    return result
  }
  function minus(a,b){
    const result = a - b
  }

  const result = add(1,2)
  console.log(result)//3
  console.log(minus(3,2))//undefined
}
// 함수 할당
// 함수도 객체이다
{
  console.log('====================[[ 함수 할당 ]]======================')
    function add(a,b){ // add함수의 메모리 주소는 0x11
    const result = a + b
    return result
    }
    // sum변수도 0x11이라는 메모리 주소를 갖는다.
    const sum = add
    console.log(sum(1,2))//3
    console.log(sum(2,3))//5
    //함수를 파라미터로 넘길 수 있다.
    function other(tot){
      console.log(tot(2,5))//7
    }
    other(sum)
}

// 함수에서 return 사용
// return : 을 함수 중간에 사용하면 함수가 종료됨
{
  console.log('===============[[ 함수에서 return 사용 ]]================')
  function print2(num){
    if(num < 0){//음수면 true
      return
    }
    //insert here print2(3)만 if문 통과
    console.log(num)//3
  }
  print2(3) // 이렇게 호출하면 return을 못 본다
  print2(-3) // 이렇게 하면 return을 본다. -> 함수 탈출한다.
}

//콜백함수
{
  console.log('=====================[[ 콜백 함수 ]]=====================')
  const add = (a, b) => a + b
  const multiply = (a, b) => a * b
  //파라미터로 전달된 action은 콜백함수이다.
  //전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라
  //함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다. 
  function calculator(a, b, action){
    if(a < 0 || b < 0){//둘 중에 하나만 만족하더라도
      return//함수를 탈출한다.
    }
    let result = action(a, b)
    console.log(`calculator ${result}`)
    return result
  }//end of calculator
  console.log('r2는 calculator함수를 빠져나와 여기로온다')

  //insert here
  //어떤 함수를 전달하는가에 따라서 계산 결과가 달라진다.
  let r1 = calculator(10, 2, add)
  let r2 = calculator(-10, -2, add)//a와 b가 음수이므로 return됨
  let r3 = calculator(10, 2, multiply)
  console.log(r1)//12
  //아래 실행문이 undefinde가 출력되는 이유는  return이 있지만 조건문에서return이 있다.
  console.log(r2)//undefinde
  console.log(r3)//20
}

console.log('==============[[ 함수 표현식, 함수 선언분 ]]==============')
//함수 표현식, 함수 선언분
{
  //함수 선언문
  function minus(){}
  //함수 표현식
  let add = function(a,b){
    return a + b
  }
  //arrow functicon -> name = () => {}
  add = (a, b) => a + b


}

//즉시 실행함수
// 함수는 값으로 계산될 수 있는 표현식이다. - 그래서 즉시실행함수가 가능하다.
// IIFE(Immedicately-Invoked Function Expressions)
  (function run(){
    console.log('run')
  })()