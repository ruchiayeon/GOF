//복제를 하는 권한을 외부에 넘겨주는것을 prototype이라고 한다.
//즉, 프로토타입 패턴은 원본 객체를 새로운 객체에 복사하여 필요에 따라 수정하는 메커니즘을 제공한다.

//복사될 대상

//대상의 복사 권한을 가지고 있는 class

//interface class
function IFetchBase() {
    this.path = "";
    this.parmeter = {};
    this.method = "";

    //연결된 자식 클래스 복제 진행
    this.clone = function () {};
}

function GetFileData() {
    IFetchBase.call(this);
    this.method = "GET";
    this.clone = function () {
        console.log("clone");
        console.log(this);
        return new GetFileData(this);
    };
}
GetFileData.prototype = Object.create(IFetchBase.prototype);
GetFileData.prototype.constructor = GetFileData;


function PostTableData() {
    IFetchBase.call(this);
    this.method = "GET";
}
PostTableData.prototype = Object.create(IFetchBase.prototype);
PostTableData.prototype.constructor = PostTableData;
PostTableData.prototype.clone = function () {
    console.log("clone");
    console.log(this);
    return new PostTableData(this);
};

//복제 권한을 넘겨받은 쪽
function UsingPrototypeClone() {
    this.cloneList = [];

    //클론을 할 목록에 this로 접근은 X 및 어떤것을 clone할지 알 필요가 없음.
    this.addCloneList = function () {
        //넣을 clone 리스트 값 정의
        const getFileData = new GetFileData();
        getFileData.parmeter = {
            body: JSON.stringify({ test: "getFileData" }),
        };
        getFileData.path = "getFileData";
        this.cloneList.push(getFileData);

        const postTableData = new PostTableData();
        postTableData.parmeter = {
            body: JSON.stringify({ test: "postTableData" }),
        };
        postTableData.path = "postTableData";
        this.cloneList.push(postTableData);
        return this;
    };

    this.useFetchBussLogic = function () {
        this.cloneList.forEach((element) => {
            // console.log(element);
            return element.clone();
        });
    };
}

const protoTest = new UsingPrototypeClone();

protoTest.addCloneList().useFetchBussLogic();

//clone List 를 수정할때ㅡ
protoTest.addCloneList = function () {
    const getFileData = new GetFileData();
    getFileData.parmeter = {
        body: JSON.stringify({ test: "changed Data" }),
    };
    getFileData.path = "changedgetFileData";
    this.cloneList.push(getFileData);
    return this;
};

protoTest.addCloneList().useFetchBussLogic();
