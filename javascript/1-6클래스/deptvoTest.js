import { DeptVO } from "./deptvo.js";

const dvo = new DeptVO(30, "인사부", "대전")
const dvo1 = new DeptVO(50, "운영부", "인천")
const dvo2 = new DeptVO(51, "개발부", "서울")

console.log(dvo)
console.log(dvo.dname)
console.log(dvo1.dname)
console.log(dvo2.dname)
console.log(dvo == dvo1)
console.log(dvo1 == dvo2)
