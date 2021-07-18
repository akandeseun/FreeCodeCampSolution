var count = 0;

function cc(card) {
  // Only change code below this line

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  
  }
    var bet = 'Hold';
    if (count > 0) {
      bet = 'Bet';
    }

    return count + " " + bet;
  

  // Only change code above this line

  
}

console.log(cc(2));