/*Task 3
Make a program that asks the user for a word or phrase. As a result, the program tells you how is input palindrome or not.

Input: Madam
Output: Madam is palindrome.

Input: Padam
Output: Padam is NOT palindrome.*/

function palidromeCheck(){
    
    let getStr = document.getElementById("cellOne").value;
    //let strReverse = reverseString;

    function reverseString() {
        // Step 1. Use the split() method to return a new array
        var splitString = getStr.split(""); // var splitString = "hello".split(""); //turns the given thing into a array of substrings
    
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse(); //reverses the array order
    
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); //joins the array into a single str
    
        //Step 4. Return the reversed string
        return joinArray; // "olleh"            //i am still unsure what return does. ends the function?
    }
    
    let strReverse = reverseString();
    
    document.getElementById('input').innerHTML = "Input: "+getStr;
    if(strReverse == getStr){
    document.getElementById('output').innerHTML = getStr+" is a palindrome.";
    }else{
    document.getElementById('output').innerHTML = getStr+" is NOT palindrome";
    }
    
};