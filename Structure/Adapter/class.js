class SamsungPhone {
    constructor() {
        this.app = "양파타이쿤";
    }

    startPalyStore() {
        console.log(`${this.app}을 플레이스토어에서 실행합니다.`);
    }
}

class ApplePhone {
    constructor() {
        this.app = "양파타이쿤";
    }

    startAppStore() {
        console.log(`${this.app}을 앱스토어에서 실행합니다.`);
    }
}

//아이폰은 기점으로 adaper 생성
class ApplePhoneApater extends ApplePhone {
    constructor(type) {
        super();
        this.type = type;
    }

    startAppStore() {
        this.type.startPalyStore();
    }
}

new SamsungPhone().startPalyStore();
new ApplePhone().startAppStore();
new ApplePhoneApater(new SamsungPhone()).startAppStore();
