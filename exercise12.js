function konversiMenit(menit){
    var h = Math.floor(menit/60)
    var m = menit%60
    if (h<10){
        h = '0' + h
    } else {
        h
    }
    if (m<10){
        m = '0' + m
    } else {
        m
    }
    return `${h}:${m}`
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53)) 
console.log(konversiMenit(88)) 
console.log(konversiMenit(120))
// console.log(konversiMenit(231))