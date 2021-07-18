function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }



  // Only change code above this line
  return answer;
}

caseInSwitch(1);


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;

  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);



switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate 9";
    break;
  
}
