## Promise

### Promise란

 - 비동기 작업을 처리할 때 사용되는 객체

 - Promise는 비동기 작업이 완료되면, 성공(fulfilled) 또는 실패(rejected) 상태로 전환되며, 작업에 대한 값을 반환하며 결과에 따라 처리됩니다.

 - Promise는 생성자 함수로 생성되며, 두 개의 콜백 함수를 인자로 받습니다. 
    - 첫 번째 콜백은 작업이 성공했을 때 호출되는 resolve 함수이고, 
    - 두 번째 콜백은 작업이 실패했을 때 호출되는 reject 함수입니다.

 - 비동기 작업이 성공하면 resolve()가 호출되어 fulfilled 상태가 되고, 실패하면 reject()가 호출되어 rejected 상태가 됩니다.

 - then() 메서드는 Promise가 성공(fulfilled)했을 때 실행되는 콜백 함수를 정의합니다. 체이닝을 통해 여러 개의 then()을 연결할 수 있습니다.

 - then() 메서드는 Promise가 성공(fulfilled)했을 때 실행되는 콜백 함수를 정의합니다.

 - catch() 메서드는 Promise가 실패(rejected)했을 때 실행되는 콜백 함수를 정의합니다.

 - finally() 메서드는 Promise가 성공(fulfilled)하든 실패(rejected)하든, 결과와 상관없이 항상 실행되는 콜백을 정의합니다. 자원 정리나 후속 작업에 유용합니다.

 - Promise는 비동기 작업을 순차적으로 처리할 수 있도록 체이닝(chaining)할 수 있습니다. then() 메서드는 또 다른 Promise를 반환하기 때문에, 여러 개의 then()을 연결하여 작업을 처리할 수 있습니다.


### Promise 예시

 - pending (대기 중): 아직 비동기 작업이 완료되지 않은 초기 상태.

 - fulfilled (이행됨): 비동기 작업이 성공적으로 완료된 상태.
 
 - rejected (거부됨): 비동기 작업이 실패한 상태.


### 체이닝을 통한 비동기 작업 처리

### Promise.all()

 - 여러 개의 Promise를 동시에 처리할 때 사용되며, 모든 Promise가 완료될 때까지 기다렸다가 결과를 반환합니다.

### Promise 체이닝 방식

 - async/await는 Promise 체이닝 방식보다 가독성을 크게 향상시키고, 비동기 코드를 마치 동기 코드처럼 작성할 수 있게 해주며, 가독성이 더 좋음