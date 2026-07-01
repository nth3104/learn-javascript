// 반복문
// for(let i=0; i < 10; i++){
//   console.log(`${i} 번째 실행 중 ...`)
// }

// 10~1 까지 카운트

// for(let i=10; i > 0; i--){
//   console.log(`${i} 번째 실행 중 ...`)
// }

// const animals = ["dog","cat","puppy"];

// for(let i=0; i<animals.length; i++){
//   console.log(animals[i]);
// }


// animals.forEach((value, index) => {
//   console.log(`${index}번쨰 : ${value}👌`)
// });

// map : 기존 배열을 조작하여 새로운 배열 리턴
// const names = ["alice", "bob", "david", "kelly", "chutzrit"]


// // 대문자로 변환된 배열
// const upperNames = names.map((value) => value.toUpperCase());
// console.log("🚀 ~ upperNames:", upperNames)

// const emogiNames = names.map((name) => `${name}👍`);
// console.log("🚀 ~ emogiNames:", emogiNames);
// console.log("🚀 ~ names:", names);

// // filter: 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 리턴 
// // 조건 만족하지 않으면 빈배열 리턴 

// // 글자수가 5자 이상인 요소들만 모은 배열 
// const filterNames = names.filter((name) => name.length >= 5);
// console.log("🚀 ~ filterNames:", filterNames);

// // find : 배열안의 요소들 중 조건을 만족하는 첫번째 요소 하나를 리턴
// // 조건 만족하지 않으면 undefined 리턴 
// const findNames = names.find((name) => name.length >= 5);
// console.log("🚀 ~ findNames:", findNames);


// // some/every : 배열안의 요소들 중 조건을 만족하는지에 대한 boolean 리턴
// const someNames = names.some((name) => name.length >= 5);
// console.log("🚀 ~ someNames:", someNames);

// const everyNames = names.every((name) => name.length >= 5);
// console.log("🚀 ~ everyNames:", everyNames);

// Q1
// function add(a, b) {
// 	return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add =(num1, num2) => {
  return num1+num2;
}

console.log(add(5, 3)); // 예상 결과: 8


// Q2 Q2. 함수 (parameter 정의)
// 문제: 두 개의 숫자를 입력받아 그 차이를 계산하는 함수를 화살표 함수로 작성하세요.

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus =(num1, num2) => {
  return num1-num2;
}

// 함수 테스트
console.log(minus(60, 20));// 예상 결과: 40


// Q3. 함수 (argument를 사용한 함수 호출)
// 문제: 다음 함수가 주어졌을 때, 이 함수를 호출하여 "안녕하세요, [이름]님. 당신의 나이는 [나이]세입니다."라는 메시지를 출력하는 코드를 작성하세요.

const introduce = (name, age) => {
  return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
};


// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.

console.log( `안녕하세요, ${name}님. 당신의 나이는 ${age}입니다.`);
// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."