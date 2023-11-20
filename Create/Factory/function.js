//부모가 기틀(Interface)로 정의 해두면 자식들이 +- 해서 찍어내는 것을 말함.

function BeverageFactory() {
    this.name = "";
    this.price = "";
    this.tempeture = "HOT";
    this.takeout = false;
    this.menuList = {};
}
//Lamda식으로 사용하면 contructor 없음
//반드시 function(){}으로 사용해야한다.
BeverageFactory.prototype.AddMenu = function (props) {
    console.log(props);
    console.log(this.menuList);
    return (this.menuList[props.name] = props.classObject);
};

BeverageFactory.prototype.BeverageOrder = function (name) {
    const classObject = this.menuList[name];
    return new classObject();
};

BeverageFactory.prototype.BeverageMake = function () {
    return console.log(
        `${this.takeout ? "포장 용기에 담긴" : "매장 컵에 담긴"} ${
            this.tempeture
        } ${this.name}가 메뉴 나왔습니다.`
    );
};

function Latte() {
    BeverageFactory.call(this);
    this.name = "Latte";
    this.price = 4000;
    this.takeout = false;
    this.tempeture = "ICE";
}

Latte.prototype = Object.create(BeverageFactory.prototype);
Latte.prototype.constructor = Latte;

function Americano() {
    BeverageFactory.call(this);
    this.name = "Americano";
    this.price = 4000;
    this.takeout = true;
    this.tempeture = "HOT";
}

Americano.prototype = Object.create(BeverageFactory.prototype);
Americano.prototype.constructor = Americano;

function BannaJuice() {
    BeverageFactory.call(this);
    this.name = "BannaJuice";
    this.price = 4000;
    this.takeout = false;
    this.tempeture = "ICE";
}

BannaJuice.prototype = Object.create(BeverageFactory.prototype);
BannaJuice.prototype.constructor = BannaJuice;

const cafeList = new BeverageFactory();

cafeList.AddMenu({ name: "Latte", classObject: Latte });
cafeList.AddMenu({ name: "Americano", classObject: Americano });
cafeList.AddMenu({ name: "BannaJuice", classObject: BannaJuice });

cafeList.BeverageOrder("Latte").BeverageMake();
cafeList.BeverageOrder("Americano").BeverageMake();
cafeList.BeverageOrder("BannaJuice").BeverageMake();
