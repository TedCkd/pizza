function waitAndRun(){
    setTimeout(() => {
        console.log('끝');
    },2000);
}

//waitAndRun();

function waitAndRun2(){
    setTimeout(() => {
        console.log('1번콜백 끝');
        setTimeout(() => {
            console.log('2번콜백 끝');
            setTimeout(() => {
                console.log('3번콜백 끝');
            },2000);
        },2000);
    },2000);
}

//waitAndRun2();

const timeoutPromise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve('완료');
    },2000);
});

// timeoutPromise.then((res) =>{
//     console.log('--then---');
//     console.log(res);
// })

const getPromise = (seconds) => new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('완료');
    }, seconds*1000);
})

// getPromise(2).then((res) =>{
//     console.log('fisrt then');
//     console.log(res);
//     return getPromise(2);
// }).then((res) => {
//     console.log('second then');
//     console.log(res);
// }).catch((res)=>{
//     console.log('firsr catch');
// }).finally(()=>{
//     console.log('--finally--');
// })

Promise.all([
    getPromise(1),
    getPromise(4),
]).then((res)=>{
    console.log(res);
});