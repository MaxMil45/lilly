// Fetch data from the backend server
fetch('http://localhost:8000/medicines')
    .then(response => response.json())
    .then(data => {
        const medicines = data.medicines;
        const mainElement = document.querySelector('main');
        const averagePriceElement = document.getElementById('average-price');
        
        mainElement.innerHTML = '';

        if (medicines.length === 0) {
            mainElement.innerHTML = "<p>No medicines available.</p>";
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

            mainElement.appendChild(medicineDiv);
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
