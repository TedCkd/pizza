const yujin = {
    name : '안유진',
    year : 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin,'name'));
console.log(Object.getOwnPropertyDescriptor(yujin,'year'));

const yujin2 = {
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};

console.log(yujin2);
console.log(yujin2.age);

console.log(Object.getOwnPropertyDescriptor(yujin2,'age'));

Object.defineProperty(yujin2, 'height',{
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(yujin2,'height'));