// 배열
const days0fWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
console.log("🚀 ~ days0fWeek:", days0fWeek);

const today = days0fWeek[1];
console.log("🚀 ~ today:", today);

// 미션 : 내가 제일 좋아하는 요일 뽑아와서 콘솔에 출력 

const day = days0fWeek[4];
console.log("🚀 ~ day:", day);


const student = {
  name : "노태호",
  mbti : "ESFP",
  favoriteColor : ["green", "yellow", "brown"]
};
console.log("🚀 ~ student:", student);

// 객체에서 이름 뽑아오기 
console.log(student.name);

// 미션: mbti, "brown" 값 뽑아와서 콘솔에 찍기
console.log(student.mbti, student.favoriteColor[2]);

console.log("favoriteColor size:", student.favoriteColor.length);
