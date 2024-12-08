myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finaly(() => {
        console.log("비동기 작업이 끝났습니다.");
    });