// Fetch existing medicines and display them
function fetchMedicines() {
    fetch('http://localhost:8000/medicines')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched medicines:", data);  // Log the fetched data to see if it's updated
            const medicines = data.medicines;
            const mainElement = document.querySelector('main');
            const averagePriceElement = document.getElementById('average-price');
            
            const medicinesList = document.getElementById('medicines-list');
            medicinesList.innerHTML = '';  // Clear any existing data

            if (medicines.length === 0) {
                medicinesList.innerHTML = "<p>No medicines available.</p>";
                return;
            }

            // Loop through each medicine and display it
            medicines.forEach(medicine => {
                const { name, price } = medicine;
                const medicineName = name || 'Unknown Medicine';
                const medicinePrice = price !== null ? `$${price.toFixed(2)}` : 'Price not available';

                const medicineDiv = document.createElement('div');
                medicineDiv.classList.add('medicine-item');

                medicineDiv.innerHTML = `
                    <h3>${medicineName}</h3>
                    <p>Price: <span class="price">${medicinePrice}</span></p>
                `;
                medicinesList.appendChild(medicineDiv);
            });

            // Calculate the average price of all medicines
            const validPrices = medicines.filter(med => med.price !== null).map(med => med.price);
            if (validPrices.length > 0) {
                const totalPrice = validPrices.reduce((acc, price) => acc + price, 0);
                const averagePrice = (totalPrice / validPrices.length).toFixed(2);
                averagePriceElement.textContent = `Average Medicine Price: $${averagePrice}`;
            } else {
                averagePriceElement.textContent = 'Average Price: N/A';
            }
        })
        .catch(error => {
            alert('An error occurred while fetching data: ' + error.message);
        });
}

// Show message for form submission feedback
function showFeedbackMessage(message, isSuccess) {
    const formMessageElement = document.getElementById('form-message');
    formMessageElement.textContent = message;
    formMessageElement.className = isSuccess ? 'success' : 'error';
    formMessageElement.style.display = 'block';
}

// Handle form submission to add new medicine
document.getElementById('medicine-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);

    if (!name || isNaN(price)) {
        showFeedbackMessage('Please enter valid medicine name and price.', false);
        return;
    }

    // Send the new medicine data to the backend
    fetch('http://localhost:8000/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Use this for FormData
        },
        body: new URLSearchParams({
            name: name,
            price: price
        })
    })
    .then(response => response.json())
    .then(data => {
        // After successful addition, fetch and display updated list
        fetchMedicines();
        showFeedbackMessage('Medicine added successfully!', true);
        // Clear form fields
        document.getElementById('medicine-form').reset();
    })
    .catch(error => {
        showFeedbackMessage('Error adding medicine: ' + error.message, false);
    });
});

// Fetch medicines when the page loads
window.onload = fetchMedicines;
