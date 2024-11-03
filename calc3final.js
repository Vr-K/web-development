function increment(cellName){
    let toIncrease = parseFloat(document.getElementById(cellName).value);
    document.getElementById(cellName).value = toIncrease + 1;
}

function decrement(cellName){
    let toDecrease = parseFloat(document.getElementById(cellName).value);
    document.getElementById(cellName).value = toDecrease - 1;
}

function calculate()
{
    let firstNumber = parseFloat(document.getElementById('cellOne').value);
    let secondNumber =parseFloat(document.getElementById('cellTwo').value);

    let operation = document.getElementById('cascade').value;

    if(operation === '+')
    {
        document.getElementById('result').innerText =
            firstNumber + secondNumber
    }
    if(operation === '-')
    {
        document.getElementById('result').innerText =
            firstNumber - secondNumber
    }
    if(operation === '*')
    {
        document.getElementById('result').innerText =
            firstNumber * secondNumber
    }
    if(operation === '/')
    {
        document.getElementById('result').innerText =
            firstNumber / secondNumber
    }
}