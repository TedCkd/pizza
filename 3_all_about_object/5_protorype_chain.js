function IdoModel(name, year){
    this.name = name;
    this.year = year;
}
IdoModel.prototype.sayHello = function(){
    return `${this.name}`;
}
function FemaleIdoModel(name, year){
    this.name = name;
    this.year = year;
}

const gaEul = new IdoModel('가을',2004);
console.log(Object.getPrototypeOf(gaEul) === IdoModel.prototype)

const ray = new FemaleIdoModel('레이',2004);
Object.setPrototypeOf(ray,IdoModel.prototype)

console.log(ray.sayHello());

FemaleIdoModel.prototype = IdoModel.prototype;

const eSeo = new FemaleIdoModel('이서,2007');
console.log(Object.getPrototypeOf(eSeo)===FemaleIdoModel.prototype);
console.log(Object.getPrototypeOf(eSeo)===IdoModel.prototype);
console.log(FemaleIdoModel.prototype===IdoModel.prototype);
