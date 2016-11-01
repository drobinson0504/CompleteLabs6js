function convertTemp(degree, tempName) {
if (tempName === "C") {
var value = (5/9); 
var valueB = (degree - 32);
var valueC = value * valueB;
  console.log("The temperature is " + valueC + " " + tempName)
}
  
   else if(tempName === "F") {
var valueD = (9/5 * degree); 
var valueE = (valueD + 32);
  console.log("The temperature is " + valueE + " " + tempName)
  }
  
  
  }

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(0, "F");