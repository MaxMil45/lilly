// Fetch data from the backend server
fetch('http://localhost:8000/medicines')
    .then(response => response.json())
    .then(data => {
        // Process the medicines array
        const medicines = data.medicines;
        
        // Select the main element where data will be displayed
        const mainElement = document.querySelector('main');
        
        // Clear the main element before adding new content
        mainElement.innerHTML = '';

        // Check if the medicines array is not empty
        if (medicines.length === 0) {
            mainElement.innerHTML = "<p>No medicines available.</p>";
            return;
        }

        // Loop through each medicine and display it
        medicines.forEach(medicine => {
            const { name, price } = medicine;

            // Handle missing name or price
            const medicineName = name || 'Unknown Medicine'; // Default name if missing
            const medicinePrice = price !== null ? `$${price.toFixed(2)}` : 'Price not available'; // Format price if valid

            // Create a div to hold each medicine's information
            const medicineDiv = document.createElement('div');
            medicineDiv.classList.add('medicine-item');

            // Add the medicine information to the div
            medicineDiv.innerHTML = `
                <h3>${medicineName}</h3>
                <p>Price: <span class="price">${medicinePrice}</span></p>
            `;

            // Append the div to the main element
            mainElement.appendChild(medicineDiv);
        });
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        alert('An error occurred while fetching data: ' + error.message);
    });
