function adding(){
    
    let button = document.querySelector("button");
    let addingNum = parseFloat(document.getElementById("cellOne").value);
    
    button.addEventListener("click", adding);
    let finalNum = 1
    let iteNums = []
    
    if (addingNum == 0) {
      document.getElementById('result').innerHTML = 1;
      }
    if (addingNum == 1) {
    document.getElementById('result').innerHTML = 1;
    }
      if (addingNum >= 1) {
        for(let iteration = 1; iteration < addingNum + 1; iteration++){
            finalNum = finalNum + iteration
            iteNums.push(iteration); 
        }
    }
    else{
      document.getElementById('result').innerHTML = "Unspecified";
        }
      iteNums = iteNums.join(" + ")
      document.getElementById('result').innerHTML = "Input: " + addingNum + " (N = "+ iteNums + ")";
      document.getElementById('result2').innerHTML = "Answer = " + finalNum;
    }