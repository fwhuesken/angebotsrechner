const discountRate = [0.0, 0.05, 0.26, 0.40, 0.49, 0.56, 0.61, 0.65, 0.68, 0.71, 0.73, 0.75, 0.76, 0.77, 0.78]
const button = document.getElementById("button")

button.addEventListener("click", calculate)

function calculate () {

  //Define all offer variables
  let numPoll = document.getElementById("numPoll").value
  let pricePoll = parseInt(document.getElementById("pricePoll").value)
  let numTargetGroup = document.getElementById("numTargetGroup").value
  let numMonitoring = document.getElementById("numMonitoring").value
  let priceMonitoring = document.getElementById("priceMonitoring").value

  //Calculate discount
  function discount (numTargetGroup) {
    if (numTargetGroup <= 1) {
      return  0;
    }
    else if (numTargetGroup > 15) {
      return discountRate[14];
    }
    else {
      return discountRate[numTargetGroup - 1];
      }
  }

  //Calculate price for target groups per poll
  let totalTargetGroup = 100 * numTargetGroup * (1 - discount(numTargetGroup));

  //Calculate price for monitoring per poll
  let totalMonitoring = numMonitoring * priceMonitoring + numMonitoring * totalTargetGroup;

  let totalPrice = numPoll * (pricePoll + totalTargetGroup + totalMonitoring);

  console.log("Preis pro Frage: €" + pricePoll)
  console.log("Preis für Zielgruppenauswertungen pro Frage: €" + Math.round(totalTargetGroup))
  console.log("Preis für Monitoring pro Frage: €" + totalMonitoring)
  console.log("Total: €" + totalPrice)

  document.getElementById("result").textContent = 'This is dynamically added text';
  
}


