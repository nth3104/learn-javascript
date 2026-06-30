// 조건문
// 목표 : 점수가 60점 이상이라면 합격 표시


// const score = 70;

// if(score >= 60){
//   console.log("합격 입니다.");
// } else {
//   console.log("불합격 입니다.");
// }

// 삼항연산자
const score = 50;
console.log(score >= 60 ? "합격" : "불합격")

console.log("종료");


// 등급 (else if)
// let grade;
// const score = 85;

// if(score >= 90) {
//   grade = "A";
// } else if(score >= 80) {
//   grade = "B";
// } else if(score >= 70) {
//   grade = "C";
// } else if(score < 70) {
//   grade = "D";
// }
// console.log(`${grade} 등급입니다.`);

// const checkLebel =() => {
//   const UserName = window.prompt("이름을 입력해주세요.");
//   const HTMLscore = window.prompt("HTML 점수를 입력해주세요.");
//   const CSSscore = window.prompt("CSS 점수를 입력해주세요.");
//   const Javascriptscore = window.prompt("JavaScript 점수를 입력해주세요.");
  
//   const averageScore = average(HTMLscore, CSSscore, Javascriptscore);
  
//   console.log(averageScore);

//   let grade = "";

// if (averageScore >= 90){
//   grade = "개발자 마스터"
// } else if (averageScore >= 70){
//   grade = "실전 투입 가능"
// } else if (averageScore >= 50){
//   grade = "성장 중인 개발자"
// } else {
//   grade = "기초부터 다시 다지기"
// }
// return `${UserName}님 등급은 ${grade}`;
// };


// const average = (num1,num2,num3) => {
//   const total = Number(num1)+Number(num2)+Number(num3); 
//   console.log(total);
//   return total/3;
// };
// const developerLEvel = checkLebel();
// console.log("🚀 ~ checkLebel:", checkLebel)



