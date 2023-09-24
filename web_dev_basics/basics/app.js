//variable define javascript
var a = 10, b = 20

// defrent way to call function in javascript

var fdata = () => {console.log("Arrow function")}
var fdata2 = function(){console.log("also function as variable.")}

console.log(c)
console.log(fdata())


var c = sum(a, b)

function sum(a, b) {
    return a + b
}