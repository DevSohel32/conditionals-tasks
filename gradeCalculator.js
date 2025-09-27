let grade = 90;

if( grade >= 90 && grade <= 100){
    console.log('your grade is A')
}
 else if (grade >= 80 && grade <= 89) {
    console.log("Your grade is B");
} else if (grade >= 70 && grade <= 79) {
    console.log("Your grade is C");
} else if (grade >= 60 && grade <= 69) {
    console.log("Your grade is D");
} else if (grade >= 0 && grade <= 59) {
    console.log("Your grade is F");
} else {
    console.log("Invalid grade! Please enter a number between 0 and 100.");
}