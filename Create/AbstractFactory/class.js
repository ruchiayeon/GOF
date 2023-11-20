//빵공장
//js에서는 인터페이스와 타입이 존재 하지 않는다.
//js에서는 Abstract와 implement 가 존재 하지 않는다.
//일반적으로 구현하는 방식으로는 만들어 지지 않는다.

class BreadFactory {
    constructor() {
        this.BreadList = [];
    }

    //생성가능한 목록으로 저장
    addCreateList(props) {
        this.BreadList.push(props.breadClassObject);
    }

    //생산 공장 돌리기
    CreateBread(props) {
        this.BreadList.map((classObject) => {
            return new classObject(props).createProduct();
        });
    }
}

//빵생성
class MakeBread {
    constructor(props) {
        this.name = props.name;
        this.flavor = props.flavor;
        this.type = props.type;
    }

    createProduct() {
        return console.log(
            `${this.flavor} ${this.name} ${this.type}빵을 생산했습니다.`
        );
    }
}

//크림빵 형식
// -> X 맛 크림빵을 생산한다.
class CreamBread extends MakeBread {
    constructor(props) {
        super({ ...props, type: "크림" });
    }
}

//케잌 형식
// -> X 맛 케잌을 생산한다.
class CakeBread extends MakeBread {
    constructor(props) {
        super({ ...props, type: "케잌" });
    }
}

//케잌 형식
// -> X 맛 케잌을 생산한다.
class CookieBread extends MakeBread {
    constructor(props) {
        super({ ...props, type: "과자" });
    }
}

//케잌 형식
// -> X 맛 케잌을 생산한다.
class RollBread extends MakeBread {
    constructor(props) {
        super({ ...props, type: "롤케잌" });
    }
}

const AbstrctFactory = new BreadFactory();

function RunningFactory() {
    /**생상 목록 추가 */
    AbstrctFactory.addCreateList({
        type: "크림",
        breadClassObject: CreamBread,
    });
    AbstrctFactory.addCreateList({ type: "케잌", breadClassObject: CakeBread });
    AbstrctFactory.addCreateList({
        type: "롤케잌",
        breadClassObject: RollBread,
    });
    AbstrctFactory.addCreateList({
        type: "과자",
        breadClassObject: CookieBread,
    });

    /**빵생산 */
    AbstrctFactory.CreateBread({
        name: "연세우유",
        flavor: "뽀또맛",
    });

    AbstrctFactory.CreateBread({
        name: "서울우유",
        flavor: "말차맛",
    });

    AbstrctFactory.CreateBread({
        name: "포켓몬",
        flavor: "앙버터맛",
    });
}

RunningFactory();
