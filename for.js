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
const names = ["alice", "bob", "david", "kelly", "chutzrit"]


// 대문자로 변환된 배열
const upperNames = names.map((value) => value.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames)

const emogiNames = names.map((name) => `${name}👍`);
console.log("🚀 ~ emogiNames:", emogiNames);
console.log("🚀 ~ names:", names);

// filter: 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 리턴 
// 조건 만족하지 않으면 빈배열 리턴 

// 글자수가 5자 이상인 요소들만 모은 배열 
const filterNames = names.filter((name) => name.length >= 5);
console.log("🚀 ~ filterNames:", filterNames);

// find : 배열안의 요소들 중 조건을 만족하는 첫번째 요소 하나를 리턴
// 조건 만족하지 않으면 undefined 리턴 
const findNames = names.find((name) => name.length >= 5);
console.log("🚀 ~ findNames:", findNames);


// some/every : 배열안의 요소들 중 조건을 만족하는지에 대한 boolean 리턴
const someNames = names.some((name) => name.length >= 5);
console.log("🚀 ~ someNames:", someNames);

const everyNames = names.every((name) => name.length >= 5);
console.log("🚀 ~ everyNames:", everyNames);