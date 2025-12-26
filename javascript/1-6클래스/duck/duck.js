export class Duck{
  constructor(name, leg){
    this.name = name
    this.leg = leg
  }
  display = () => {
    console.log('나는 오리 입니다.')
  }
  swimming = () => {
    console.log('모든 오리는 물위에 뜹니다.')
  }
}