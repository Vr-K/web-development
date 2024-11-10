/*Task 1

Make a program that asks the user for a word or phrase. As a result, the program tells you how many L letters the input contained.

Input: Hello World!
Output: Hello World contains 3xL characters

*/

function numberOf(){
    //let button = document.getElementById("button");       //why was i instructed to add this?
    let getStr = document.getElementById("cellOne").value;
    //let strLen = getStr.lenght;                             //calculates the lenght of str
    //button.addEventListener("click", numberOf);           //for this? should these listeners be outside the function?
    
    /*
    charLower = "l";
    charCap = "L";
    counter = 0;
*/
    //let getStr2 = getStr;

    let getStr2 = (getStr.split("l").length - 1);           //split() splits array into substrings
    let getStr3 = (getStr.split("L").length - 1);           // meaning this getStr substrings that read "L" and canculates every substring that is called "L" -1;
    let counter = getStr2 + getStr3;
    
    /*
    for (let iteration = 0; iteration < getStr.lenght; iteration++) {      //iteration set up for the loop, continues as long i shorter than strLen, which is getStr.lenght
        if (str[iteration] === charCap) {
            counter++;
        }
        if (str[iteration] === charLower) {
            counter++;
        }
    }*/
   // document.getElementById('input').innerHTML = "Input: "+getStr;
    document.getElementById('input').innerHTML = "Input: "+getStr;
    document.getElementById('output').innerHTML = "The word "+getStr+" contains "+counter+"xL characters.";
    
};

//does not count ANY letters in the str
//maybe cause it does not, in fact, know how long the word is and keeps popping out strLen and undefined?
//i am getting no issues on google dev tools or here. so, there is something wrong with my logic