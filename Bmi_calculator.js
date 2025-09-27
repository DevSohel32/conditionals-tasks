let weight = 70;
let height = 66;
let bmi = weight / ((height*0.0254)*2)
console.log('your bmi',bmi.toFixed(2))

if(bmi < 18.5){
    console.log('you are underweight')
}
else if (bmi >= 18.5 && bmi <= 24.9){
    console.log('you are normal')
}
else if(bmi >= 25 && bmi <= 29.9){
console.log('you are overweight')
}
else{
    console.log('you are obese')
}