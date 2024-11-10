
function numberOfvowels(){
    
    let getStr = document.getElementById("cellOne").value;

    //(aeiouy[åäö])

    //let getStr2 = (getStr.split("a"+"A"+"e"+"E"+"i"+"I"+"o"+"O"+"u"+"U"+"å"+"Å"+"ä"+"Ä"+"ö"+"Ö").length - 1); //why doesnt THIS work? compared to below? (, does not also work)

    let getStrLower = (getStr.split("a").length - 1)+(getStr.split("e").length - 1)+(getStr.split("i").length - 1)+(getStr.split("o").length - 1)+(getStr.split("u").length - 1)+(getStr.split("å").length - 1)+(getStr.split("ä").length - 1)+(getStr.split("ö").length - 1);
    let getStrCapita = (getStr.split("A").length - 1)+(getStr.split("E").length - 1)+(getStr.split("I").length - 1)+(getStr.split("O").length - 1)+(getStr.split("U").length - 1)+(getStr.split("Å").length - 1)+(getStr.split("Ä").length - 1)+(getStr.split("Ö").length - 1);

    let getStr2 = getStrLower + getStrCapita;    

    //but above does?
    
    document.getElementById('input').innerHTML = "Input: "+getStr;
    document.getElementById('output').innerHTML = getStr+" contains "+getStr2+" vowels.";
    
};