function calculate2()
{
    let firstNum = parseFloat(document.getElementById('cellOne').value);
    let secondNum = parseFloat(document.getElementById('cellTwo').value);

    let form = document.getElementById('calculator-2');
    let operation = form.elements["operator-2"].value;

    if(operation === '+')
    {
        document.getElementById('result').innerText =
        firstNum + secondNum;
    }
    if(operation === '-')
    {
        document.getElementById('result').innerText =
        firstNum - secondNum;
    }
    if(operation === '*')
    {
        document.getElementById('result').innerText =
        firstNum * secondNum;
    }
    if(operation === '/')
    {
        document.getElementById('result').innerText =
        firstNum / secondNum;
    }
}