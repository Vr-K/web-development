function oddAndEven(){
    
    let button = document.querySelector("button");
    let addingNum = parseFloat(document.getElementById("cellOne").value);
    
    button.addEventListener("click", oddAndEven);
    let finalEven = 0
    let finalOdd = 1
    let iteEvenNums = []
    let iteOddNums = []
    let loopsEven = 0
    let loopsOdd = 0
    
      if (addingNum == 0) {
      document.getElementById('result1').innerHTML = 1;
      }
    if (addingNum == 1) {
    document.getElementById('result1').innerHTML = 1;
    }
    if (addingNum <= 0){
      document.getElementById('result1').innerHTML = "Unspecified";
    }
      if (addingNum >= 1) {
        for(let iteration = 2; iteration < addingNum + 1; iteration++){
            finalEven = finalEven + iteration + 1;
            iteEvenNums.push(iteration);
            iteration = iteration + 1;
            loopsEven++;
        }
        for(let iteration = 1; iteration < addingNum + 1; iteration++){
            finalOdd = finalOdd + iteration + 1;
            iteOddNums.push(iteration);
            iteration = iteration + 1;
            loopsOdd++;
        }
      }
      iteEvenNums = iteEvenNums.join(" + ");
      iteOddNums = iteOddNums.join(" + ");

      iteEvenNums = iteEvenNums.toString();
      iteOddNums = iteOddNums.toString();

      finalEven = finalEven - loopsEven;
      finalOdd = finalOdd - loopsOdd - 1;
      
      document.getElementById('result1').innerHTML = "Input: " + addingNum;
      document.getElementById('result2').innerHTML = "Sum of Even : " + iteEvenNums + " = " + finalEven;
      document.getElementById('result3').innerHTML = "Sum of Odd : " + iteOddNums + " = " + finalOdd;
    }