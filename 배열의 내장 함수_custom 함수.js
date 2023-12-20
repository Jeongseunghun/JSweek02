// 1. filter > customFilter 직접 구현
function customFilter(arr, callback) {
    const filterres = [];

    for (let i = 0 ; i < arr.length ; i++){
        if(callback(arr[i],i,arr)){
            filterres.push(arr[i]);
        }
    }

    return filterres;
}

//콜백함수 예제
function overthree(str){
    return str.length > 3;
}

const filterwords = ['hi','my','name','is','jeong'];

const longwords = customFilter(filterwords,overthree);

console.log(longwords);

// 1-1. filter 함수 사용

const filterres2 = filterwords.filter((word) => word.length > 3);

console.log(filterres2);


// 2. every > customEvery 직접 구현
function customEvery(arr, callback){
    for(let i = 0 ; i < arr.length; i++){
        if(!callback(arr[i],i,arr)){
            return false;
        }
    }
    return true;
}

//콜백함수 예제
function isEven(num) {
    return num % 2 === 0;
}

const everynum = [2,4,6,8,10];

const alleven = customEvery(everynum,isEven);

console.log(alleven)

// 2-1. every 함수 사용
const isBelowThreshold = (currentVal) => currentVal < 40;


console.log(everynum.every(isBelowThreshold));


// 3. some > customSome 직접 구현
function customSome(arr,callback){

    for(let i = 0; i < arr.length ; i++){
        if(callback(arr[i],i,arr)){
            return true;
        }

    }
    return false;
}

//콜백함수 예제
function isEven(num){
    return num % 2 === 0;
}

const somenum = [1,3,4,5,7,9];

const hasEven = customSome(somenum,isEven)

console.log(hasEven);

// 3-1. some 함수 사용

const even = (element) => element % 2 === 0;

console.log(somenum.some(even));


// 4. forEach > customForEach 직접 구현

function customForEach(arr,callback){
    for(let i = 0; i < arr.length ; i++){
        callback(arr[i],i,arr);
    }
}

//콜백함수 예제
function logItem(item){
    console.log(`${item}`);

}

const forEachstr = ['apple','banana','orange']

customForEach(forEachstr,logItem);

// 4-1. forEach 함수 사용

forEachstr.forEach((element) => console.log(element));


// 5. map > customMap 직접 구현
function customMap(arr,callback) {
    const res = [];

    for(let i = 0; i < arr.length; i++){
        res.push(callback(arr[i],i,arr));
    }

    return res;
}

//콜백함수 예제
function doubleNumber(num){
    return num * 2;
}

const mapnums = [1,2,3,4,5];

const doubleNumbers = customMap(mapnums,doubleNumber);

console.log(doubleNumbers);

// 5-1. map 함수 사용

const map1 = mapnums.map((x) => x * 2);

console.log(map1);


// 6. reduce > customReduce 직접 구현
function customRdeuce(arr,callback,initialValue) {

    let accmulator = initialValue !== undefined ? initialValue: arr[0];

    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accmulator = callback(accmulator, arr[i], i, arr);
    }

    return accmulator;
}

//콜백함수 예제
function sum(accmulator, currentElement) {
    return accmulator + currentElement;
}

const reducenums = [1,2,3,4,5];

const totalsum = customRdeuce(reducenums,sum,0);

console.log(totalsum);

// 6-1. reduce 함수 사용

const initialVal = 0;
const sumWithInitial = reducenums.reduce(
    (accumulator, currentval) => accumulator + currentval, initialVal);

console.log(sumWithInitial)


// 7. flat > customFlat 직접 구현
function customFlat(arr,depth = 1) {
    if(depth <= 0){
        return arr.slice();
    }

    function flattenArray(array, currentDepth) {
        return array.reduce((acc,val) => {
            if(Array.isArray(val) && currentDepth < depth) {
                return acc.concat(flattenArray(val,currentDepth+1));
            }
            else {
                return acc.concat(val);
            }
        },[]);
    }

    return flattenArray(arr,1);
}

const nestedArr = [1,[2,[3,4,[5,6]]]];

const flatArr = customFlat(nestedArr,2);

console.log(flatArr);

// 7-1. flat 함수 사용
const flatarr1 = [0, 1, 2, [3, 4]];

console.log(flatarr1.flat());

const flatarr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(flatarr2.flat());
console.log(flatarr2.flat(2));
console.log(flatarr2.flat(Infinity));