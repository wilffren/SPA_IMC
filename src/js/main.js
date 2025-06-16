


// myHeight = prompt(message = "please, write your height ")
// myWeight = prompt(message = "please, write your weight ")

// imc = myWeight / (myHeight * myHeight)

// alert("your imc is: " + imc)

// create a table with the clasification and write that information into the console


function spaImc(){


let myWeight = document.getElementById('weight').value

let myHeight = document.getElementById('height').value

let buttonCalculate = document.getElementById('calculate')

buttonCalculate = myWeight / (myHeight * myHeight)

let result = document.getElementById('result').innerHTML = buttonCalculate

}
