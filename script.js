document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    console.log("Form submitted!"); // Debugging message

    // Get form values
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const email = document.getElementById("Email").value;
    const address = document.getElementById("Address").value;
    const plusOne = document.querySelector('input[name="plusOne"]:checked')?.value || "No";

    // Find the table body
    const tableBody = document.getElementById("rsvptablebody");

    // Create a new row
    const row = document.createElement("tr");

    // Populate row with cells
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${plusOne}</td>
    `;

    // Append the row to the table body
    tableBody.appendChild(row);

    
});