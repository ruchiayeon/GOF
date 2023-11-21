//객체 리터럴 사용시 원래 new 불가
let name = "singleton";
let instance;

const OBsingleton = {
    getName: function () {
        return console.log(name);
    },
    setName: function (props) {
        this.name = props;
        return console.log(name);
    },
};

//freeze화 시키면ㅡ
Object.freeze(OBsingleton);

//외부에서 new 불가능 / 기존에 생성된 것을 사용해야한다.
export { OBsingleton };

//function prototype 사용시
//instance 여부로 생성 거부
function Fusingleton() {
    if (this.instance) {
        return console.log("이미 인스턴스 있음");
    }
    instance = this;

    this.getName = function () {
        return console.log(name);
    };
    this.setName = function (props) {
        this.name = props;
        return console.log(name);
    };
}

Object.freeze(Fusingleton);

//외부에서 new 불가능 / 기존에 생성된 것을 사용해야한다.
export { OBsingleton };
