//변환이 스무스하게 되게 하는것이 목표이다.
//연결지점이 다른것을 한번에 연결하기 위해 만들어졌다고 보면된다.

function Subject() {
    this.observerList = [];
    this.subcribe = function (observer) {
        this.observerList.push(observer);
        return;
    };

    this.unsubcribe = function (observer) {
        this.observerList = this.observerList.filter((element) => {
            return observer.id === element.id;
        });
    };

    this.notify = function () {
        this.observerList.forEach((element) => {
            element.update();
        });
    };
}

function Observer(id) {
    this.id = id;
    this.update = function () {
        console.log(`Observer ${this.id} is updating`);
    };
}

function Observer2(id) {
    this.id = id;
}

Observer2.prototype.update = function () {
    console.log(`Observer ${this.id} is updating2`);
};

const yeon = new Observer(1);
const joo = new Observer2(2);
const hack = new Observer2(3);
const sso = new Observer(4);

const subject = new Subject();

subject.subcribe(yeon);
subject.notify();
console.log("-----------------------------------");
subject.subcribe(joo);
subject.notify();
console.log("-----------------------------------");
subject.subcribe(hack);
subject.notify();
console.log("-----------------------------------");
subject.subcribe(sso);
subject.notify();
console.log("-----------------------------------");
subject.unsubcribe(sso);
subject.notify();
