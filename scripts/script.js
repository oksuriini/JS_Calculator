let a = document.getElementById("screen")

// initialize buttons and eventListeners 
document.getElementById("enter").addEventListener("click", function(){calculate(getElemsText(), a)})
document.getElementById("clear").addEventListener("click", function(){a.innerHTML = " "})
document.getElementById("add1").addEventListener("click", function(){a.innerHTML+= "1"})
document.getElementById("add2").addEventListener("click", function(){a.innerHTML+= "2"})
document.getElementById("add3").addEventListener("click", function(){a.innerHTML+= "3"})
document.getElementById("add4").addEventListener("click", function(){a.innerHTML+= "4"})
document.getElementById("add5").addEventListener("click", function(){a.innerHTML+= "5"})
document.getElementById("add6").addEventListener("click", function(){a.innerHTML+= "6"})
document.getElementById("add7").addEventListener("click", function(){a.innerHTML+= "7"})
document.getElementById("add8").addEventListener("click", function(){a.innerHTML+= "8"})
document.getElementById("add9").addEventListener("click", function(){a.innerHTML+= "9"})
document.getElementById("add0").addEventListener("click", function(){a.innerHTML+= "0"})
document.getElementById("adddiv").addEventListener("click", function(){a.innerHTML+= "/"})
document.getElementById("addmult").addEventListener("click", function(){a.innerHTML+= "*"})
document.getElementById("addminus").addEventListener("click", function(){a.innerHTML+= "-"})
document.getElementById("addplus").addEventListener("click", function(){a.innerHTML+= "+"})
document.getElementById("addmod").addEventListener("click", function(){a.innerHTML+= "%"})



// function to parse through screen values:
function getElemsText(){
    var a = document.getElementById("screen")
    var text = a.textContent.split(/(\+|\-|\*|\%|\/)/g)
    return text
}

// function to calculate screen text values: 
function calculate(arrVal, elem){
    //init value and operator
    var value = 0
    var operator = "+"

    // Go through each thing in array and calculate it
for (let i = 0; i < arrVal.length; i++) {
    console.log(value)
    // if parsed value is empty or whitespace, skip it
    if(arrVal[i] == ""){
        break;
    }
    // if parsed value is a number
    else if(!Number.isNaN(parseInt(arrVal[i]))){
        // check operator and do operation based on it
        switch (operator) {
            case "+":
                value += parseInt(arrVal[i])
                break;
            case "-":
                value -= parseInt(arrVal[i])
                break;
            case "/":
                value /= parseInt(arrVal[i])
                break;
            case "*":
                value *= parseInt(arrVal[i])
                break;
            case "%":
                value %= parseInt(arrVal[i])
                break;
            default:
                console.log("Something went wrong")
                break;
        }
        //if parsed value is not a number, nor whitespace
    } else if( arrVal[i] !== "") {
        // Decide which operator is processed
        switch (arrVal[i]){
            case "+":
                operator = "+"
                break;
            case "-":
                operator = "-"
                break;
            case "/":
                operator = "/"
                break;
            case "*":
                operator = "*"
                break;
            case "%":
                operator = "%"
                break;
            default:
                console.log("Something went wrong in operator")
                break;
        }
    }
}
// Add HTML to value
elem.innerHTML = value
}








































// Nothin of value here archival purpose only:
//
//console.log(b)
//
//
//b.forEach(element => {
//    console.log(parseInt(element))   
//});
//console.log(b)
//
//
//function calculate(arrVal){
//    if(arrVal.length < 3){
//        console.log("Less than 3")
//        return arrVal[0]
//    }
//    var isNum = true
//    for (let i = 0; i < arrVal.length; i++) {
//        const element = arrVal[i]
//        if(!Number.isNaN(parseFloat(arrVal[i]))){
//            
//        }
//        
//    }
//}
//
//function process(arrWorks){
//    arrWorks.forEach(element => {
//        
//    });
//}
//
//
//calculate(b)