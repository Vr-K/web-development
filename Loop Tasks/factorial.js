function factorial(){
    
let button = document.querySelector("button");
let factorialNum = parseFloat(document.getElementById("cellOne").value);

button.addEventListener("click", factorial);
let finalNum = 1

if (factorialNum == 0) {
  document.getElementById('result').innerText = 1;
  }
  if (factorialNum >= 1) {
    for(let iteration = 1; iteration < factorialNum + 1; iteration++){
        finalNum = finalNum * iteration
        document.getElementById('result').innerHTML = iteration + " +";
    }
}
else{
  document.getElementById('result').innerText = "unspecified";
    }
  document.getElementById('result').innerHTML = "Input: " + factorialNum + "\nAnswer: " + finalNum;
}