function SamsungPhone() {
    this.app = "양파타이쿤";
}

SamsungPhone.prototype.startPalyStore = function () {
    console.log(`${this.app}을 플레이스토어에서 실행합니다.`);
};

function ApplePhone() {
    this.app = "양파타이쿤";
}

ApplePhone.prototype.startAppStore = function () {
    console.log(`${this.app}을 앱스토어에서 실행합니다.`);
};

//아이폰은 기점으로 adaper 생성
function ApplePhoneApater(type) {
    ApplePhone.call(this);
    this.type = type;
}
ApplePhoneApater.prototype = Object.create(ApplePhone.prototype);
ApplePhoneApater.prototype.constructor = ApplePhoneApater;
ApplePhoneApater.prototype.startAppStore = function () {
    this.type.startPalyStore();
};

new SamsungPhone().startPalyStore();
new ApplePhone().startAppStore();
new ApplePhoneApater(new SamsungPhone()).startAppStore();
