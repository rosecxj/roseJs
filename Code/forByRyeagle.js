
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
