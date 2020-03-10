"use strict";
const checkForSpam = function(message) {
  const messageLower = message.toLowerCase();
  let wordForSpam = "sale";
  let wordForSpam2 = "spam";
  if (
    messageLower.includes(wordForSpam) ||
    messageLower.includes(wordForSpam2)
  ) {
    return true;
  }
  return false;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
