//Task 4: Refactoring for Reusability
function calculateTotalCost(price, quantity, taxRate, discount) {
    // Check if price, quantity, and taxRate are valid numbers
    if (
        typeof price !== 'number' || isNaN(price) ||
        typeof quantity !== 'number' || isNaN(quantity) ||
        typeof taxRate !== 'number' || isNaN(taxRate)
    ) {
        return "Invalid input.";
    }

    // If discount is provided (not undefined), validate it
    if (discount !== undefined) {
        if (typeof discount !== 'number' || isNaN(discount)) {
            return "Invalid input.";
        }
    } else {
        discount = 0; // default discount
    }

    // Calculate subtotal and apply discount
    let subtotal = price * quantity - discount;

    // Ensure subtotal is not negative
    if (subtotal < 0) subtotal = 0;

    // Apply tax
    const totalCost = subtotal * (1 + taxRate);

    return totalCost;
}

// Example usage
console.log(calculateTotalCost(10, 2, 0.05));                 // 21
console.log(calculateTotalCost(10, 2, 0.05, 5));              // 15.75
console.log(calculateTotalCost(10, 2, 0.05, undefined));      // "Invalid input."
console.log(calculateTotalCost(10, 2, 0.05, null));           // "Invalid input."
console.log(calculateTotalCost(10, 2, 0.05, "5"));             // "Invalid input."
console.log(calculateTotalCost(10, "2", 0.05));                // "Invalid input."
console.log(calculateTotalCost("10", 2, 0.05));                // "Invalid input."
console.log(calculateTotalCost(10, 2, "0.05"));                // "Invalid input."
