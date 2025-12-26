//클래스 - ES6(ECMAScript 2015) 지원
{
  class Fruit{
    //생성자 함수 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){
      this.name = name
      this.emoji = emoji
    }
    //함수 선언시 function예약어 사용 불가
    display = () => {
      console.log(`${this.name} : ${this.emoji}`)
    }
  }//end of Fruit
  //insert here
  //apple은 Fruit클래스의 인스턴스이다.
   const apple = new Fruit('사과', '🍎');
   const banana = new Fruit('바나나', '🍌');
   console.log(apple.name)
   console.log(banana.name)
   apple.display();
   banana.display();

   //주의
   const obj = { name : "scott"}
   console.log(obj.name)
}