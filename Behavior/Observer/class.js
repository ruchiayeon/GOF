//변환이 스무스하게 되게 하는것이 목표이다.
//연결지점이 다른것을 한번에 연결하기 위해 만들어졌다고 보면된다.

class Subject {
    constructor() {
        this.observerList = [];
    }
    subcribe(observer) {
        this.observerList.push(observer);
        return;
    }

    unsubcribe(observer) {
        this.observerList = this.observerList.filter((element) => {
            return observer.id === element.id;
        });
    }

    notify() {
        this.observerList.forEach((element) => {
            element.update();
        });
    }
}

class Observer {
    constructor(id) {
        this.id = id;
    }
    update() {
        console.log(`Observer ${this.id} is updating`);
    }
}

class Observer2 {
    constructor(id) {
        this.id = id;
    }
    update() {
        console.log(`Observer ${this.id} is updating2`);
    }
}

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
