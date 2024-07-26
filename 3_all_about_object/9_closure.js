function asdf(){
    var numver = 10;
    function qwer(){
        return numver;
    }
    return qwer;
}
const num = asdf();
console.log(num);
console.log(num());

function Idol(name,year){
    this.name =name;
    var_year = year;
    this.sayNameAndYear = function(){
        return `ㅎㅇㅎㅇ ${this.name}이고 ${year}년생임`;
    }
}
const yujin = new Idol('안유진', 2003);
console.log(yujin);
console.log(yujin.sayNameAndYear());