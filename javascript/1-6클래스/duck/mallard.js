import { Duck } from "./duck.js"

/*
//mallard.js
export class MallardDuck extends Duck{
  constructor(){
    super('청둥오리',2)
  }
}
*/

export class MallardDuck extends Duck{
  constructor(name, leg){
    super(name,leg)
  }
}