// Promise.race()

/*
- 여러 개의 Promise 중에서 가장 빨리 완료된 Promise의 결과를 반환합니다. 
    첫 번째로 완료된 Promise의 결과에 따라 성공(fulfilled) 또는 실패(rejected)가 결정됩니다.
- 여러 개의 작업 중에서 가장 빨리 완료된 작업의 결과를 얻고 싶을 때 사용합니다.
*/


const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "첫 번째 완료"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "두 번째 완료"));
Promise.race([promise1, promise2])
.then((result) => {
    console.log(result); // "두 번째 완료"
})
.catch((error) => {
    console.error(error);
});