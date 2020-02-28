function xo(str){
    var a = 0
    var b = 0
    for (var i=0;i<str.length;i++){
        if(str[i]==='x'){
            a = a+1
        } else if (str[i]==='o') {
            b = b+1
        }
    }
    if (a===b){
        return true
    } else {
        return false
    }
}
console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))
// console.log(xo('xoxoxoxo'))