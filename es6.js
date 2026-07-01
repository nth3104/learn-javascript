// Logical Operator : 논리적인 TRUE, FALSE 판단하여 반환

const user = {
  isLoggedIn: false, 
  role: "admin" // 다른 값으로는 "guest", "user"
}

// 관리자 페이지 접근 여부 확인 
/**
//  * 조건1: 로그인된 상태일 것 
//  * 조건2: role이 관리자일 것
//  */
// if (user.isLoggedIn && user.role === "admin") {
//   // 관리자 페이지 접근 가능한 상태 
//   console.log("✅관리자 페이지 접근 가능");
// } else {
//   // 관리자 페이지 접근 불가능한 상태
//   console.log("❌관리자 페이지 접근 불가능"); 
// }

// // OR 연산자
// // 성인인지(18세이상) 혹은 부모의 동의를 받았는지 확인
// const person = {
//   age : 20,
//   hasparentalConsent: false
// }

// // 삼항연산자
// const guideText = person.age >= 18 || person.hasparentalConsent ? "✅서비스 접근 가능" : "❌서비스 접근 불가능" 
// console.log(guideText)  

// NOT 연산자
// const userInput = "";

// // 사용자 입력 값 비어있는지 체크
// if(!userInput.trim()) {
//   // 입력 값이 비어있는 경우
//   console.log("입력 값이 비어있습니다. 값을 입력하세요");
// }


// 아래 조건에 모두 부합되는 경우 콘첸츠 배포
// 조건 1: 티스토리 블로그에 로그인 세션이 있는 경우
// 조건 2: AI가 작성한 글의 품질 게이트 점수가 95점 이상인 경우 
// const loginCheck = {
//   loginsession : 0,
//   score : 94
// }

// if (loginCheck.loginsession > 0 && loginCheck.score >= 95 ) {
//   console.log("콘텐츠 배포 가능");
// } else {
//   console.log("콘텐츠 배포 불가능");
// }

// Default Parameter: 파라미터 기본값 지정
// const greeting =(name="사용자") => {
//   console.log(`${name}님, 반갑습니다.`);
// } 

// greeting();

// Object Destructurin 구조분해 할당
// 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아주는 것

const colors = ["red", "green", "blue"];

// // 구조분해 할당 
// const [first, second] = colors
// console.log("🚀 ~ second:", second)
// console.log("🚀 ~ first:", first)

// const guest = {
//   userName : "노태호",
//   id : "nth3104",
//   age : 18
// }

// // const userName = guest.userName;
// const userId = guest.id;
// // const userAge = guest.age;

// const { userName } = guest;
// console.log(userName);

// Spread Syntax: 배열이나 객체를 개별요소로 분해하거나 결합할 때 사용 
// const newColors = [...colors, "purple", "beige"];
// console.log("🚀 ~ newColors:", newColors)

// const newGuest = {...guest, mbti: "ESFP"}
// console.log("🚀 ~ newGuest:", newGuest)

// 미션: 오늘의 할 일 추가
// todoItem에 오늘 할 일 추가, isComplete의 값을 true로 변경하는 새로운 객체 만들기   
const todoItem = {
  id: 1,
  isComplete: false
}

const newtodoItem = {...todoItem, name: "taeho", password: 1234, isComplete : true}
console.log("🚀 ~ newtodoItem:", newtodoItem);
