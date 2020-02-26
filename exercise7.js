var rows1 = 5
let i 
let j
for (i = 1; i <= rows1; i++){
    console.log("*")
}
var rows2 =5
for(i = 1; i <= rows2; i++){
    var char=""
    for (j = 1; j <= rows2; j++){
        char+="*"
    }
    console.log(char)
}
var rows3 = 5
for (i = 1; i <= rows3; i++){
    var char=""
    for (j = 1; j <= i; j++){
        char+="*"
    }
    console.log(char)
}