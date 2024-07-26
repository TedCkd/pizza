function longWork(){
    setTimeout(()=>{
        console.log('완료');
    },3000);
}
console.log('hello');
longWork();
console.log('wolrd');