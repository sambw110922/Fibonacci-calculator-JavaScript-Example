/*
    fiblogic js rewrite.
    02 July 2026.
*/

//  This is the global array that holds the results of the calculations.
var fibSequenceList = [];

//  The maximum and minimum that the user is allowed.
const max_num = 100;
const min_num = 0;
const max_times = 50;
const min_times = 0;

//  Calculate the fibonacci.
function FibCalculate(noTimes){

    for(let i = noTimes; i > 0; i--){

        let lastNum = fibSequenceList[fibSequenceList.length-1];
        let penultimateNum = fibSequenceList[fibSequenceList.length-2];
        let result = lastNum + penultimateNum;

        fibSequenceList.push(result);

    }

    DisplayResults();

}

//  This displays the results.
function DisplayResults(){

    
    if(document.getElementById("resultsList")){
        document.getElementById("resultsList").remove();
    }
    
    let resultsList = document.createElement("ul");
    resultsList.id = "resultsList";
    resultsList.className = "";
    resultsList.className = "resultsList";

    for(let i = 0; i < fibSequenceList.length; i++){

        var resultsListItem = document.createElement("li");
        
        if(i < fibSequenceList.length-1){
            resultsListItem.innerHTML = fibSequenceList[i] + ", ";
        } else {
            resultsListItem.innerHTML = fibSequenceList[i] + ".";
        }
        
        resultsListItem.className = "";
        resultsListItem.className = "resultsListItem";
        
        resultsList.appendChild(resultsListItem);
    }

    document.getElementById("listContainer").appendChild(resultsList);

}

//  This validates the user's inputs.
//  If inputType is 1, then the input to check is a number.
//  If inputType is 2, then the input to check is the number of times.
function ValidateUserInputs(inputType, number){

    //  The return flag. Is false by default.
    let isValidInput = false;

    switch(inputType){
        case 1:
            if(number > min_num && number < max_num){
                isValidInput = true;
            }
            break;
        case 2:
            if(number > min_times && number < max_times){
                isValidInput = true;
            }
            break;
    }

    return isValidInput;

}

//  Gets the user's input.
function GetUserInput(){

    var num1 = parseInt(document.getElementById("txtFirstNum").value);
    var num2 = parseInt(document.getElementById("txtSecondNum").value);
    var noTimes = parseInt(document.getElementById("txtTimesCalc").value);

    let checkValidNum1 = ValidateUserInputs(1, num1);
    let checkValidNum2 = ValidateUserInputs(1, num2);
    let checkValidNoTimes = ValidateUserInputs(2, noTimes);

    //  Only continue if all are true.
    if(checkValidNum1 == true && checkValidNum2 == true && checkValidNoTimes == true){

        //  Reset the array.
        fibSequenceList = [];

        fibSequenceList.push(num1);
        fibSequenceList.push(num2);

        FibCalculate(noTimes);

    } else {
        window.alert("Please enter a valid number to continue.");
    }

}

//  The start function.
function fibAppStart(){

    document.getElementById("btnCalculate").addEventListener("click", function(e){

        //  This prevents a form's default action.
        e.preventDefault();

        //  Gets the user's input.
        GetUserInput();

    });

}

//  The start function.
fibAppStart();
