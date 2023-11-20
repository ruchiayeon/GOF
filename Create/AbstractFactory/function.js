//빵공장
//js에서는 인터페이스와 타입이 존재 하지 않는다.
//js에서는 Abstract와 implement 가 존재 하지 않는다.
//일반적으로 구현하는 방식으로는 만들어 지지 않는다.

function BreadFactory() {
    this.BreadList = [];

    //생성가능한 목록으로 저장
    this.addCreateList = (props) => {
        this.BreadList.push(props.breadClassObject);
    };

    //생산 공장 돌리기
    this.CreateBread = (props) => {
        this.BreadList.map((classObject) => {
            return new classObject(props).createProduct();
        });
    };
}

//빵생성
function MakeBread() {
    this.name;
    this.flavor;
    this.type;

    this.createProduct = () => {
        return console.log(
            `${this.flavor} ${this.name} ${this.type}빵을 생산했습니다.`
        );
    };
}

//크림빵 형식
// -> X 맛 크림빵을 생산한다.
function CreamBread(props) {
    MakeBread.call(this);
    this.name = props.name;
    this.flavor = props.flavor;
}
CreamBread.prototype = Object.create(MakeBread.prototype);
CreamBread.prototype.constructor = CreamBread;
CreamBread.prototype.type = "크림";

//케잌 형식
// -> X 맛 케잌을 생산한다.
function CakeBread(props) {
    MakeBread.call(this);
    this.name = props.name;
    this.flavor = props.flavor;
}
CakeBread.prototype = Object.create(MakeBread.prototype);
CakeBread.prototype.constructor = CakeBread;
CakeBread.prototype.type = "케잌";

//케잌 형식
// -> X 맛 케잌을 생산한다.
function CookieBread(props) {
    MakeBread.call(this);
    this.name = props.name;
    this.flavor = props.flavor;
}
CookieBread.prototype = Object.create(MakeBread.prototype);
CookieBread.prototype.constructor = CookieBread;
CookieBread.prototype.type = "쿠키";

//케잌 형식
// -> X 맛 케잌을 생산한다.
function RollBread(props) {
    MakeBread.call(this);
    this.name = props.name;
    this.flavor = props.flavor;
}
RollBread.prototype = Object.create(MakeBread.prototype);
RollBread.prototype.constructor = RollBread;
RollBread.prototype.type = "롤케잌";

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
        type: "쿠키",
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
