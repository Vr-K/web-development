function testPic(){
    
    let getStr = document.getElementById("cellOne").value;

    let strLen = getStr.length;         //this works now
    let firstSix = getStr.substring(0,6);
    let date1 = getStr.substring(0,2);  // get the first two numbers of PIC
    let date2 = Number(date1);          // turn the first substr two into a number
    let month1 = getStr.substring(2,4); // get substring of month
    let month2 = Number(month1);
    let year1 = getStr.substring(4,6);  // get the year
    let inbetween = getStr.substring(6,7);      // gets the inbetween
    let nextThree1 = getStr.substring(7,10);
    let falseControlChar = "XYZ";       //i forget what the bool for js is so i made this instead

    document.getElementById('input').innerHTML = "Input:" + getStr;

    document.getElementById('output5').innerHTML = "Input:" + inbetween;
//this was to check if the substrings are correct. they are
/*
    document.getElementById('output1').innerHTML = strLen;
    document.getElementById('output2').innerHTML = month2;
    document.getElementById('output3').innerHTML = year1;
    document.getElementById('output4').innerHTML = inbetween;
    document.getElementById('output5').innerHTML = nextThree2;
    document.getElementById('output6').innerHTML = controlChar1;
*/
//this checks for there is correct number of days in a month or something, maybe
    if (date2 > 31){
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    }
    else if (date2 <= 0){        // for some reason this part keeps proccing?
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    }
    else if (date2 == 31 && month2 == 2){
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    }
    else if (date2 == 31 && month2 == 4){
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    }
    else if (date2 == 31 && month2 == 6){
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    }
    else if (date2 == 31 && month2 == 9){
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    }
    else if (date2 == 31 && month2 == 11){
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    } else if (date2 == 29 && month == 2 != year1 % 4 == 0){        // this should check if it is NOT a leap year
        document.getElementById('output1').innerHTML = "Date input is wrong.";
        falseControlChar = 0;
    } else {
        document.getElementById('output1').innerHTML = "Input: Nothing wrong";
    }
    //how do i add the leap year calc in here?

    // ok dates should be done for errors
    //next i will check if dash or A is correct
    

    // ok numbers should be done now for control character

////////////////////////////////////////////////////////////////////////////////////////
//                  this makes control char
////////////////////////////////////////////////////////////////////////////////////////

    let nineNumbers = firstSix.concat(nextThree1);
    let nineNumbers1 = nineNumbers;

    let y = nineNumbers1/31;
    let z = ((y + "").split(".")[1]); //the first stage of the control char calc

    let a = "0.";       // second stage of control char calc
    z = a.concat(z);
    z = Number(z);

    z = z * 31;

    z = Math.round(z);
    z = Number(z)

//////////////////////////////////////////////////////////////////////////////////////////

    let controlChar = z;

    if (controlChar == 1){
        document.getElementById('output4').innerHTML = "Control Char " + 1;
    } else if (controlChar == 2) {
        document.getElementById('output4').innerHTML = "Control Char " + 2;
    }else if (controlChar == 3){
        document.getElementById('output4').innerHTML = "Control Char " + 3;
    }else if (controlChar == 4){
        document.getElementById('output4').innerHTML = "Control Char " + 4;
    }else if (controlChar == 5){
        document.getElementById('output4').innerHTML = "Control Char " + 5;
    }else if (controlChar == 6){
        document.getElementById('output4').innerHTML = "Control Char " + 6;
    }else if (controlChar == 7){
        document.getElementById('output4').innerHTML = "Control Char " + 7;
    }else if (controlChar == 8){
        document.getElementById('output4').innerHTML = "Control Char " + 8;
    }else if (controlChar == 9){
        document.getElementById('output4').innerHTML = "Control Char " + 9;
    }else if (controlChar == 10){
        document.getElementById('output4').innerHTML = "Control Char A";
    }else if (controlChar == 11){
        document.getElementById('output4').innerHTML = "Control Char B";
    }else if (controlChar == 12){
        document.getElementById('output4').innerHTML = "Control Char C";
    }else if (controlChar == 13){
        document.getElementById('output4').innerHTML = "Control Char D";
    }else if (controlChar == 14){
        document.getElementById('output4').innerHTML = "Control Char E";
    }else if (controlChar == 15){
        document.getElementById('output4').innerHTML = "Control Char F";
    }else if (controlChar == 16){
        document.getElementById('output4').innerHTML = "Control Char H";
    }else if (controlChar == 17){
        document.getElementById('output4').innerHTML = "Control Char J";
    }else if (controlChar == 18){
        document.getElementById('output4').innerHTML = "Control Char K";
    }else if (controlChar == 19){
        document.getElementById('output4').innerHTML = "Control Char L";
    }else if (controlChar == 20){
        document.getElementById('output4').innerHTML = "Control Char M";
    }else if (controlChar == 21){
        document.getElementById('output4').innerHTML = "Control Char N";
    }else if (controlChar == 22){
        document.getElementById('output4').innerHTML = "Control Char P";
    }else if (controlChar == 23){
        document.getElementById('output4').innerHTML = "Control Char R";
    }else if (controlChar == 24){
        document.getElementById('output4').innerHTML = "Control Char S";
    }else if (controlChar == 25){
        document.getElementById('output4').innerHTML = "Control Char T";
    }else if (controlChar == 26){
        document.getElementById('output4').innerHTML = "Control Char U";
    }else if (controlChar == 27){
        document.getElementById('output4').innerHTML = "Control Char V";
    }else if (controlChar == 28){
        document.getElementById('output4').innerHTML = "Control Char W";
    }else if (controlChar == 29){
        document.getElementById('output4').innerHTML = "Control Char X";
    }else if (controlChar == 30){
        document.getElementById('output4').innerHTML = "Control Char Y";
    }else {
        document.getElementById('output1').innerHTML = "Is valid: False, input is incorrect.";
        falseControlChar = 0;
    }
    controlChar = controlChar % 2;

    if(falseControlChar == "XYZ"){
        document.getElementById('output1').innerHTML = "Is valid: True."
    }

    if (falseControlChar != "XYZ"){
      None
    }else{
        if (controlChar == 0){
            document.getElementById('output2').innerHTML = "sex: Female";
        }else{
            ocument.getElementById('output2').innerHTML = "sex: Male";
        }
    }
        //document.getElementById('output5').innerHTML = "TEST: " + date2 + "/" + month1 + "/" + year1; //date in the format as date

        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let superDate = day +"/" + month+"/"+ year;

        let age = (year - year1)-1900;

        document.getElementById('output3').innerHTML = "Age: " + age;

        //document.getElementById('output5').innerHTML = "TEST: " + age;
};