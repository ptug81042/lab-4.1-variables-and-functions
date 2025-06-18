// Task 2: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate) {
    // check if all inputs are valid numbers
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
        return "Invalid input.";
    }

    // Calculate total cost
    const totalCost = (price * quantity) * (1 + taxRate);

    return totalCost;
}

// Example usage
console.log(calculateTotalCost(100, 2, 0.05)); // Output: 210
console.log(calculateTotalCost(50, 3, 0.1)); // Output: 165
console.log(calculateTotalCost(20, 5, 0.2)); // Output: 120
console.log(calculateTotalCost(100, 2, "0.05")); // Output: "Invalid input."
console.log(calculateTotalCost("100", 2, 0.05)); // Output: "Invalid input."
console.log(calculateTotalCost(100, "2", 0.05)); // Output: "Invalid input."
console.log(calculateTotalCost(100, 2, null)); // Output: "Invalid input."
console.log(calculateTotalCost(100, 2, undefined)); // Output: "Invalid input."