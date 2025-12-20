/*
    19th December 2025.
*/

//  This function gets the user input for the sequence.
function GetUserInput(){

    var noTime = 0
    var num1 = 0
    var num2 = 0

    var noTime = parseInt(document.getElementById("txtTimesCalc").value);
    var num1 = parseInt(document.getElementById("txtFirstNum").value);
    var num2 = parseInt(document.getElementById("txtSecondNum").value);

    if(ValidateSequenceNums(num1) == true && ValidateSequenceNums(num2) == true){

        if(ValidateTimesNum(noTime) == true){

            var sequence = [num1, num2];

            //  Perform the fibonacci
            Fibonacci(noTime, sequence);

        } else {

            //  display error message
            document.getElementById("errorTimer").className = "";
            document.getElementById("errorTimer").className = "showErrorTimer";

        }


    } else {

        //  display error message
        document.getElementById("errorSequence").className = "";
        document.getElementById("errorSequence").className = "showErrorSequence";

    }

    /*

    //  Validate the inputs.
    if(ValidateTimesNum(noTime) == true && ValidateTimesNum(num1) == true && ValidateTimesNum(num2) == true){
        
        var sequence = [num1, num2];

        //  Perform the fibonacci
        Fibonacci(noTime, sequence);

    } else {

        //  display error message
        window.alert("one or more of your inputs is invalid.")

    }

    */

}

//  This validates the number of times
function ValidateTimesNum(timesNum){

    var isValid = false;

    const maxTimes = 50;

    if(timesNum > 0 && timesNum <= maxTimes){
        isValid = true;
    }

    return isValid;

}

//  This validates the sequence numbers
function ValidateSequenceNums(sequenceNum){

    var isValid = false;

    const maxSequence = 9999;

    if(sequenceNum > 0 && sequenceNum <= maxSequence){
        
        isValid = true;

    }

    return isValid;

}

//  This function actually calculates the sequence
//  noTime = the number of times to perform the sequence
//  sequence = the actual list
function Fibonacci(noTime, sequence){

    if(noTime > 0){

        let lastNum = sequence[sequence.length-1];
        let penultimateNum = sequence[sequence.length-2];
        
        let num3 = penultimateNum + lastNum;

        sequence.push(num3);

        noTime = noTime - 1;

        Fibonacci(noTime, sequence);

    } else {

        console.log(sequence);
        DisplayResults(sequence);

    }

}

//  Displays the result
function DisplayResults(sequence){

    //  Display the results
    document.getElementById("results").className = "";
    document.getElementById("results").classList = "showResults";

    //var sequenceStr = "";

    for(let i = 0; i < sequence.length; i++){

        setTimeout(function(){

            var newPoint = document.createElement("li");
            
            newPoint.className = "fibNum";
            newPoint.innerHTML = sequence[i].toString();

            //  only add a comma if not at the end of sequence
            if(i < sequence.length-1){
    
                //sequenceStr = sequenceStr  + ", ";
                newPoint.innerHTML += ", ";

            }

            document.getElementById("resultList").append(newPoint);

        }, i * 1000);

    }

        /*

        document.getElementById("resultList").append(newPoint);

        }, 2 * 1000);

        //sequenceStr = sequenceStr + sequence[i].toString();

        var newPoint = document.createElement("li");
        
        newPoint.className = "fibNum";
        newPoint.innerHTML = sequence[i].toString();

        //  only add a comma if not at the end of sequence
        if(i < sequence.length-1){
 
            //sequenceStr = sequenceStr  + ", ";
            newPoint.innerHTML += ", ";
        }

        document.getElementById("resultList").append(newPoint);

        */

    //  Display the string.
    //document.getElementById("txtResults").innerHTML = sequenceStr;

}

//  The start up function 
function init(){

    //  hide the results on start
    document.getElementById("results").className = "";
    document.getElementById("results").className = "hideResults";

    //  Hide the error messages
    document.getElementById("errorSequence").className = "";
    document.getElementById("errorSequence").className = "hideErrorSequence";

    document.getElementById("errorTimer").className = "";
    document.getElementById("errorTimer").className = "hideErrorTimer";

    //  For the sequence error message
    document.getElementById("btnCloseSequenceErrorMsg").addEventListener("click", function(){
        document.getElementById("errorSequence").className = "";
        document.getElementById("errorSequence").className = "hideErrorSequence";
    });

    //  For the timer error message
    document.getElementById("btnCloseTimerErrorMsg").addEventListener("click", function(){
        document.getElementById("errorTimer").className = "";
        document.getElementById("errorTimer").className = "hideErrorTimer";
    });

    //  The click function of the submit form
    document.getElementById("btnCalculate").addEventListener("click", function(e){

        e.preventDefault();

        //  Gets the user input
        GetUserInput();



    });

}

init();