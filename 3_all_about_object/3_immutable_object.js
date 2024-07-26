
const yujin = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yujin);
console.log(Object.isExtensible(yujin));

Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin));

console.log(Object.isSealed(yujin));
Object.seal(yujin);

console.log(Object.isFrozen(yujin));
Object.freeze(yujin);



const yujin2 = {
    name : '안유진',
    year : 2003,
    gaeul :{
        name : '가을',
        year : 2002,
    }
}
Object.freeze(yujin2);
console.log(Object.isFrozen(yujin2['gaeul']));