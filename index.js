
// console.log("멀티캠퍼스 강의중...");


// // 변수
// let userName = "노태호";
// // console.log("userName",  userName);

// // const userID = "taeho";
// // console.log("userID", userID)

// // 미션: 적절한 변수명에 이름을 담아서 변수 만들기
// // console에 찍어서 확인하기 

// const userName2 = "xoghsh";


// userName = "fasjfhjaksf";
// // console.log("🚀 ~ userName:", userName);

// // 데이터 타입 
// const userAge = 33;      // 숫자
// const userMBTI = "ESFP"  // 문자
// // console.log("🚀 ~ userMBTI:", userMBTI)

// // boolean 타입
// const isLoggedin = "true";
// // console.log("🚀 ~ isLoggedin:", isLoggedin)
// // console.log("Type isLoggedin", typeof isLoggedin)

// // null/undefined
// const empty = null;
// let empty2;
// // console.log("🚀 ~ empty2:", empty2)

// // 미션: 나머지 변수들도 타입확인하는 코드 작성해서 콘솔에 찍어보기 
// console.log("Type userName", typeof userName)
// console.log("Type userName2", typeof userName2)
// console.log("Type isLoggedin", typeof isLoggedin)
// console.log("Type userAge", typeof userAge)
// console.log("Type userMBTI", typeof userMBTI)
// console.log("Type empty", typeof empty)
// console.log("Type empty2", typeof empty2)

// // 함수

// // 함수 정의 
// function greeting (){
//   // 로직
//   // 목표: "???님, 반갑습니다" 문자열 콘솔에 찍기 

//   // 1. 사용자 이름 담을 변수 선언
//   // 2. 사용자에게 이름 받아와서 변수에 담기
//     const inputUserName = window.prompt("이름을 입력해주세요.");
//     console.log("🚀 inputUserName", inputUserName)
//   // 3. "변수 + 님, 반갑습니다" 문자열 완성하기
//     // const result = inputUserName + "님, 반갑습니다.";
//   const result = `${inputUserName}님, 반갑습니다.`
//   // 4. 완성된 문자열 콘솔에 찍기 
//       console.log(result)
// }

// // 함수 실행
// // greeting();

// const greetingInput = (name) => {
//   console.log(`${name}님, 반갑습니다.`);
// }
// greetingInput("노태호");
// greetingInput("가나다");
// greetingInput("라마바");
// greetingInput("아자차");

// const add = (num1, num2) => {
//     console.log("🚀 num1:", num1)
//     console.log("🚀 num2:", num2)
//   return num1 + num2 ;
// };

// const doubleSum = (num) => {
//   return num * 2 
// }

// const addResult = add(10,30);
// const result = doubleSum(addResult);


// console.log("🚀 ~ addResult:", addResult)
// console.log("🚀 ~ result:", result)

// 미션: 소문자 파라미터 가져와서 대문자로 변환 
// const upperString =(str) => str.toUpperCase();


// const upperResult = upperString("abc");
// console.log("🚀 ~ upperResult:", upperResult)

// 미션: 대문자 파라미터 가져와서 소문자로 변환 
const lowerString =(str) => str.toLowerCase();


console.log("lowerString", lowerString("ABcdgdjbDGH"));
