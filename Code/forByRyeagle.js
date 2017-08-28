
// 列举的方式
/*
for (var i = 2; i < 31; i = i +2) {
    if (!(i == 4 || i == 14 || i == 24)) {
        console.log(i);                
    } 
}
*/

//抽象的方式
/*
for (var i = 2; i < 31; i = i +2) {
    if(!(i % 10 === 4)){
        console.log('抽象方式:' + i);
    }
}
*/

//函数方式
function getEvenNum() {
    for (var num = 2; num < 21; num = num +2) {
        if (!isEndOf4(num)) {
            console.log('函数方式:' + num)
        }
    }    
}

function isEndOf4(whatever) {
    if (whatever % 10  === 4) {
        return true
    }
    return false
}

getEvenNum();

//单独调用isEndOf4
console.log(isEndOf4(4))
console.log(isEndOf4(3))
console.log(isEndOf4())

function maxNum(numberA, numberB) {
    if(numberA > numberB) {
        return numberA;
    }

    return numberB;
}

console.log(maxNum(12, 2))
console.log(maxNum(3, 32))
console.log(maxNum(2, 2))


//过滤Excel中阅读量大于3000的文章

var articleList = [2323, 10233, 23230, 3000, 2999, 4300];

function filter(list)
{
    var resultList;
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            console.log(list[i]);
            if (list[i] > 3000) { 
            }
        }                
    }

    return resultList.length ? resultList : []
}

var resultList = filter(articleList)
console.log(resultList)