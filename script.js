const discountRate = [0.0, 0.05, 0.26, 0.40, 0.49, 0.56, 0.61, 0.65, 0.68, 0.71, 0.73, 0.75, 0.76, 0.77, 0.78]
const button = document.getElementById("button")


console.log('Hello world')

button.addEventListener("click", calculate)

/*function discount (numTargetGroup) {
    let result;
    if (numTargetGroup <= 1) {
      result = 0
    }
    else if (numTargetGroup > 15) {
      result = discountRate[14]
    }
    else {
      result = discountRate[numTargetGroup - 1]
      }
    return result
  }*/

function calculate () {
  
  //Define all offer variables
  let numPoll = document.getElementById("numPoll").value
  let pricePoll = document.getElementById("pricePoll").value
  let numTargetGroup = document.getElementById("numTargetGroup").value
  let numMonitoring = document.getElementById("numMonitoring").value
  let priceMonitoring = document.getElementById("priceMonitoring").value

  //Calculate discount
  

  let discount = numTargetGroup <= 1 ? 0 : discountRate[numTargetGroup - 1]

  console.log(discount)

  //Calculate price for target groups per poll
  let priceTargetGroup = 100 * numTargetGroup * (1 - discount)

  console.log("Preis pro Frage: €" + pricePoll)
  console.log("Preis für Zielgruppenauswertungen pro Frage: €" + Math.round(priceTargetGroup))


  console.log(priceMonitoring);

}


//let totalPriceNoDiscount = 