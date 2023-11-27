export interface ISubject {
    subcribe(observer: Observer): void;
    unsubcribe(observer: Observer): void;
    notify(): void;
}

export interface IObserver {
    id: number;
    update(): void;
}

export class Subject implements ISubject {
    private observerList: IObserver[] = [];

    subcribe(observer: Observer) {
        this.observerList.push(observer);
        return;
    }

    unsubcribe(observer: Observer) {
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

export class Observer implements IObserver {
    constructor(readonly id: number) {}
    update() {
        console.log(`Observer ${this.id} is updating`);
    }
}

export class Observer2 implements IObserver {
    constructor(readonly id: number) {}
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
