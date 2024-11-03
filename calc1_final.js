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