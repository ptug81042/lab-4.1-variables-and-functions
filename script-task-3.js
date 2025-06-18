//Task 3: Functions with Conditional Logic
function checkEligibility(age, isEmployed) {
  // Check if age is a valid number and isEmployed is a boolean
  if (typeof age !== "number" || isNaN(age) || typeof isEmployed !== "boolean") {
    return "Invalid input.";
  }

  // Apply eligibility rules
  if (age > 18 && isEmployed) {
    return "Eligible for the program.";
  } else if (age > 18 && !isEmployed) {
    return "Conditionally eligible for the program.";
  } else {
    return "Not eligible for the program.";
  }
}

// Example usage
console.log(checkEligibility(25, true));   // Output: "Eligible for the program."
console.log(checkEligibility(30, false));  // Output: "Conditionally eligible for the program."
console.log(checkEligibility(17, true));   // Output: "Not eligible for the program."
console.log(checkEligibility("twenty", true)); // Output: "Invalid input."
console.log(checkEligibility(25, "yes"));  // Output: "Invalid input."
console.log(checkEligibility(25, null));   // Output: "Invalid input."