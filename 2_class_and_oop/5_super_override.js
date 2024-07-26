class IdoModel {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdol extends IdoModel {
    constructor(name, year, part) {
        super(name, year); // 부모 클래스의 생성자 호출
        this.part = part; // 자식 클래스에서 추가된 속성
    }
}

const yujin = new FemaleIdol('안유진', 2003, '3분');
console.log(yujin);