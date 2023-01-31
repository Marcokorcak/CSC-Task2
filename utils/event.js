import { Alert } from "bootstrap";
import { add } from "./math";
import { multiply } from "./math";


const eventHandler = () => {

const addButton = document.getElementById('add');
const multiplyButton = document.getElementById('multiply');
const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const result = document.getElementById('result');

const updateDomWithAddedNumbers = () => {
    if(number1.value.length != 0 && number2.value.length != 0)
    {
        result.innerHTML = "Sum of " + number1.value + " & " + number2.value + " is " + add(number1.value, number2.value);
    }
    else
    {
        alert("Please enter a number in both feilds!");
    }
    //parseInt(number1.value, 10) + parseInt(number2.value);

}

const updateDomWithMultipliedNumber = () => {
    if(number1.value.length != 0 && number2.value.length != 0)
    {
        result.innerHTML = "Product of " + number1.value + " & " + number2.value + " is " + multiply(number1.value, number2.value);
    }
    else
    {
        alert("Please enter a number in both feilds!");
    }
}

addButton.addEventListener('click', updateDomWithAddedNumbers); 
multiplyButton.addEventListener('click',updateDomWithMultipliedNumber )

}

export {eventHandler};