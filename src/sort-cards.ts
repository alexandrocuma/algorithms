// 
// 'American Express': length = 15, start with = 36
// 'Diner Continental': length = 16-17, start with = 35, 37
// 'Visa': length = 15, start with = 4
// 'Mastercard': length = 16, start with = 40127, 49263, 45263, 417845, 48572

const SortRules = [
  { length: 15, initial: "36", type: "American Express" },
  { length: [16, 17], initial: ["35", "37"], type: "Diner Continental" },
  { length: 15, initial: "4", type: "Visa" },
  { length: [15, 17], initial: ["40127", "49263", "45263", "417845", "48572"], type: "Mastercard" },
]



const SortCards = (cardNumber) => {
  for (let letter of cardNumber.toString()) {
    if (isNaN(letter)) return 'Invalid'
  }
  const PossibleRule = SortRules.filter(rule => {
    if (typeof rule.length === "object") {
      for (let len of rule.length) {
        if (cardNumber.toString().length === len) return rule
      }
    } else {
      if (cardNumber.toString().length === rule.length) return rule
    }
  })
  console.log(PossibleRule)
  const daRule = PossibleRule.filter(rule => {
    if (typeof rule.initial === "object") {
      for (let number of rule.initial) {
        if (cardNumber.toString().substring(0, number.length) === number) return rule
      }
    } else {
      if (cardNumber.toString().substring(0, rule.initial.length) === rule.initial) return rule
    }
  })
  console.log(daRule)
  if (daRule.length > 0) {
    return daRule[0].type
  }
  return 'Invalid'
}

console.log('The type of the card is: ', SortCards(369273541923182))
console.log('The type of the card is: ', SortCards(3792735419231823))
console.log('The type of the card is: ', SortCards(401278253993043))
console.log('The type of the card is: ', SortCards('3792735419231823'))
console.log('The type of the card is: ', SortCards('37927354192dps'))

