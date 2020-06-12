// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }

// wrapGifts(gifts);


function writeCards(recipients, holiday) {
  let thankCard = []
  for (let i = 0; i < recipients.length; i++) {
    thankCard.push(`Thank you, ${recipients[i]}, for the wonderful ${holiday} gift!`);
  }
  return thankCard;
}

function countDown(num) {
// let count = num;
  while (num >= 0) {
    console.log(num--);
  }
}

