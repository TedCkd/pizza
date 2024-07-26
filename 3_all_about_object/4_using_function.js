function IdoModel(name, year){
    console.log(new.target);
    this.name = name;
    this.year = year;
    this.dance = function(){
        return `${this.name}이 춤을 춥니다`;
    }
}
const yujin =new IdoModel('안유진',2003);
console.log(yujin);
const yujin2 =IdoModel('안유진',2003);
console.log(yujin2);