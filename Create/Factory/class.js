//부모가 기틀(Interface)로 정의 해두면 자식들이 +- 해서 찍어내는 것을 말함.

class BeverageFactory{
    constructor(){
        this.name = ""
        this.price = ""
        this.tempeture = "HOT"
        this.takeout = false
        this.menuList = {}
        this.classObject
    }

    AddMenu(props){
       return this.menuList[props.name]= props.classObject
    }

    BeverageOrder(name){
        const classObject = this.menuList[name]
        return new classObject()
    }

     BeverageMake(){
        return console.log(`${this.takeout? "포장 용기에 담긴":"매장 컵에 담긴"} ${this.tempeture} ${this.name}가 메뉴 나왔습니다.`)
    }

}


class Latte extends BeverageFactory{
    constructor(){
        super()
        this.name="Latte"
        this.price= 4000
        this.takeout=false
        this.tempeture="ICE"
    }
}

class Americano extends BeverageFactory{
    constructor(){
        super()
        this.name="Americano"
        this.price= 4000
        this.takeout=true
        this.tempeture="HOT"
    }
}

class BannaJuice extends BeverageFactory{
    constructor(){
        super()
        this.name="BannaJuice"
        this.price= 4000
        this.takeout=false
        this.tempeture="ICE"
    }
}

const cafeList = new BeverageFactory()

cafeList.AddMenu({name:"Latte",classObject:Latte})
cafeList.AddMenu({name:"Americano",classObject:Americano})
cafeList.AddMenu({name:"BannaJuice",classObject:BannaJuice})


cafeList.BeverageOrder("Latte").BeverageMake()
cafeList.BeverageOrder("Americano").BeverageMake()
cafeList.BeverageOrder("BannaJuice").BeverageMake()
