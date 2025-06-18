// Task 1: Flexible String Manipulation with Functions
function formatFullName(firstName, lastName) {
    // Check for missing inputs
    if (firstName === "" || lastName === "") {
        return "Invalid name input.";
    }

    // Capitalize first letter of firstName and lastName
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const formattedFirstName = capitalize(firstName);
    const formattedLastName = capitalize(lastName);

    // Return the formatted full name
    return `${formattedLastName}, ${formattedFirstName}`;
}

// Example usage
console.log(formatFullName("john", "doe")); // Output: "Doe, John"
console.log(formatFullName("", "smith")); // Output: "Invaalid name input."
console.log(formatFullName("jane", "")); // Output: "Invalid name input."
console.log(formatFullName("", "")); // Output: "Invalid name input."