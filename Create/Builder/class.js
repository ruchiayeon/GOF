/** 빌더패턴은 옵션이 많을때 생성된다. */

//기본옵션

//가루류
//액체류
//충전류
//데코류
//형태

//기본이 되는 옵션 정의
class BaseBreadBuilder {
    setFlour() {}
    setLiqued() {}
    setInFlaver() {}
    setOutDeco() {}
    setShape() {}
}

class BreadBuilder extends BaseBreadBuilder {
    constructor() {
        super();
    }

    setFlour(props) {
        this.flour = props;
        console.log(`${this.flour}를 사용합니다.`);
        return this;
    }

    setLiqued(props) {
        this.liqued = props;
        console.log(`${this.liqued}를 첨가합니다.`);
        return this;
    }

    setInFlaver(props) {
        this.inFlaver = props;
        console.log(`반죽안에 ${this.inFlaver}을 넣습니다.`);
        return this;
    }

    setShape(props) {
        this.shape = props;
        console.log(`반죽을 ${this.shape}모양으로 성형합니다.`);
        return this;
    }

    setOutDeco(props) {
        this.outDeco = props;
        console.log(`반죽위에 ${this.outDeco}로 장식합니다.`);
        return this;
    }

    result() {
        console.log(this);
        return console.log("생성이 완료 되었습니다.");
    }
}

/**builder class에 있는것 전부 */
new BreadBuilder()
    .setFlour("밀가루")
    .setLiqued("우유")
    .setInFlaver("밀크초코")
    .setShape("거북이")
    .setOutDeco("딸기 슬라이스")
    .result();

/**특정 옵션 제외 */
new BreadBuilder()
    .setFlour("호밀가루")
    .setLiqued("물")
    .setShape("세모")
    .result();

/**Builder에 옵션 추가 */
BreadBuilder.prototype.setStimming = function (props) {
    this.stimming = props;
    console.log(`반죽 발효시 ${this.stimming} 스팀 합니다.`);
    return this;
};

/**추가 옵션 사용 */
new BreadBuilder()
    .setFlour("호밀가루")
    .setLiqued("물")
    .setShape("세모")
    .setStimming("분무기로 두번")
    .result();
