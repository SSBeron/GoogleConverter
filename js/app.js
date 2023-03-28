
const selector1 = document.getElementById('selector-1');
const inputLeft = document.getElementById('input-left');
const inputRight = document.getElementById('input-right');
const labelLeft = document.getElementById('label-left');
const labelRight = document.getElementById('label-right');
const formula = document.getElementById('formula');

selector1.addEventListener('change', changeUnit);
inputLeft.addEventListener('change', updateUnit);
inputRight.addEventListener('change', updateUnit);
let unitChoice = 'temperature';

function updateUnit(event){

    // console.log(this.value, this.id);

    let inputID = this.id;
    let inputValue = this.value;

    let conversion = 0;

    if(unitChoice == 'temperature'){
        if(inputID == 'input-left'){
            conversion = (inputValue - 32) * 5/9;
            inputRight.value = conversion;
        } else {
            conversion = inputValue * 9/5 + 32;
            inputLeft.value = conversion;
        }
    } else if(unitChoice == 'distance'){
        if(inputID == 'input-left'){
            conversion = inputValue * 5280;
            inputRight.value = conversion;
        } else {
            conversion = 5280/inputValue;
            inputLeft.value = conversion;
        }
    } else if(unitChoice == 'length'){
        if(inputID == 'input-left'){
            conversion = inputValue * 2.54;
            inputRight.value = conversion;
        } else {
            conversion = inputValue / 2.54;
            inputLeft.value = conversion;
        }
    } else if(unitChoice == 'weight'){
        if(inputID == 'input-left'){
            conversion = inputValue * 2.205;
            inputRight.value = conversion;
        } else {
            conversion = inputValue / 2.205;
            inputLeft.value = conversion;
        }
    } else if(unitChoice == 'time'){
        if(inputID == 'input-left'){
            conversion = inputValue * 3600;
            inputRight.value = conversion;
        } else {
            conversion = inputValue / 3600;
            inputLeft.value = conversion;
        }
    }
}

function changeUnit(){
    
    unitChoice = this.value;

    if (unitChoice == 'temperature'){
        inputLeft.value = 212;
        inputRight.value = 100;
        labelLeft.textContent = 'Farenheits';
        labelRight.textContent = 'Celsius';
        formula.textContent = 'F = C * 9/5 + 32';

    } else if(unitChoice == 'distance'){
        inputLeft.value = 1;
        inputRight.value = 5280;
        labelLeft.textContent = 'Miles';
        labelRight.textContent = 'Feet';
        formula.textContent = '1 mi = 5280 ft';

    } else if(unitChoice == 'length'){
        inputLeft.value = 1;
        inputRight.value = 2.54;
        labelLeft.textContent = 'Inches';
        labelRight.textContent = 'Centimeters';
        formula.textContent = '1 in = 2.54 cm';

    } else if(unitChoice == 'weight'){
        inputLeft.value = 1;
        inputRight.value = 2.205;
        labelLeft.textContent = 'Kilograms';
        labelRight.textContent = 'Pounds';
        formula.textContent = '1 kg = 2.20462 lb';

    } else if(unitChoice == 'time'){
        inputLeft.value = 1;
        inputRight.value = 3600;
        labelLeft.textContent = 'Hours';
        labelRight.textContent = 'Seconds';
        formula.textContent = '1 min = 60 sec';

    }
    
}



// const btn1 = document.getElementById('btn-1');
// btn1.addEventListener('click', chooseConv);

// function chooseConv(value){
//     if(value == Temperature){
//         convertTemp()
//     } else if(value == Time){
        
//     } else if(value == Distance){

//     } else if(value == Length){

//     }
// }

// function convertTemp(num, yourValue){
// if(Farenheit == true) {
//     let C = (num - 32) * 5/9;
//    return C;
// } else if(Length){
//     let F = num * 9/5 + 32;
//     return F;
// }
// };