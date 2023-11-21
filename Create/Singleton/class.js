let name = "singleton";
let instance;

//function prototype 사용시
class Clsingleton {
    constructor() {
        if (this.instance) {
            return console.log("이미 인스턴스 있음");
        }
        instance = this;
    }

    getName = function () {
        return console.log(name);
    };
    setName = function (props) {
        this.name = props;
        return console.log(name);
    };
}

Object.freeze(Clsingleton);

//외부에서 new 불가능 / 기존에 생성된 것을 사용해야한다.
export { Clsingleton };
