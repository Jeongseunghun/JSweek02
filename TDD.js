//assertion
//1. assert(exception) 함수 작성
function assert(exception){
    if(!exception) {
        throw new Error("error입니다.");
    }
    else{
        return true;
    }
}

//예제
let val = 10;
assert(val === 20);


//2. expect(value, equal) 함수 작성
function expect(value,equal){
    assert(value === equal);
}

//예제
let res = (a,b) => a+b;
expect(res(2,4),6);

//예외발생 예제
res = (a,b) => a * b;
expect(res(3,5),12);

//3. 주어진 결과가 값이 아닌 객체 또는 배열인 경우에도 같은 동작을 하도록

function assert(exception){
    if(!exception) {
        throw new Error("error입니다.");
    }
    else{
        return true;
    }
}

function isEqual(obj1,obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object' || obj2 === null){
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key],obj2[key]))
            return false;
    }

    return true;
}

function expect(value,equal){
    assert(isEqual(value,equal));
}

//예제
let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
expect(obj1,obj2)
