// Promise.all()
/*
- 여러 개의 Promise를 동시에 처리할 때 사용되며, 모든 Promise가 완료될 때까지 기다렸다가 결과를 반환합니다.
- 모든 Promise가 성공하면 결과 배열을 반환하고, 하나라도 실패하면 전체 Promise가 실패(rejected) 상태가 됩니다.
*/
const promise1 = Promise.resolve("첫 번째 작업 완료");
const promise2 = Promise.resolve("두 번째 작업 완료");
const promise3 = Promise.resolve("세 번째 작업 완료");
Promise.all([promise1, promise2, promise3])
 .then((results) => {
 console.log(results); // ["첫 번째 작업 완료", "두 번째 작업 완료", "세 번째 작업 완료"]
 })
 .catch((error) => {
 console.error(error);
 });