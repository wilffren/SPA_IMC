function spaImc(){


let myWeight = document.getElementById('weight').value

let myHeight = document.getElementById('height').value

let buttonCalculate = document.getElementById('calculate')

buttonCalculate = myWeight / (myHeight * myHeight)

let result = document.getElementById('result').innerHTML = buttonCalculate

if (result <= 18.5){
    console.log("Low Weight")
}else if (result > 18.5 && result <= 24.9){
    console.table("Normal Weight")
}else if (result > 25 && result <= 29.9){
    console.log("Overweight")
}else if (result > 30){
    console.log("Obesity")
}

}






// create a table with the clasification and write that information into the console

