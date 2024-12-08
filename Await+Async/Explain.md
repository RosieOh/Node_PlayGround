### async/await

 - 비동기 작업을 보다 간결하고 직관적으로 처리할 수 있게 해주는 문법

 - async 키워드는 함수 선언 앞에 붙여, 그 함수가 비동기 함수임을 나타냅니다.

 - async 함수는 항상 Promise 객체를 반환하며, 함수 내부에서 암묵적으로 Promise를 반환하는 동작을 처리합니다.

### async/await Promise

 - await 키워드는 async 함수 내에서만 사용할 수 있으며, Promise가 이행될 때까지 함수의 실행을 일시 정지합니다.

 - await는 비동기 작업의 결과가 반환될 때까지 기다린 후, 그 결과를 반환합니다.

 - await는 Promise를 반환하는 함수 앞에만 사용할 수 있으며, Promise가 완료되기 전까지 다른 작업은 진행되지 않습니다.

### async/await - Fetch Data

 - async/await에서 에러가 발생하면, Promise는 rejected 상태가 되고, 이를 처리하기 위해 try...catch 구문을 사용합니다.

 - try...catch 블록 안에서 await를 사용할 수 있으며, Promise가 실패했을 때 catch 블록으로 에러가 전달됩니다.