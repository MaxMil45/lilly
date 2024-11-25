# Lilly Technical Challenge Documentation Template

## Approach
In this task, I took a piece-by-piece approach. I first made a primary outline for both backends and frontends, in each way. For example, I made sure that the FastAPI backend was in place to transport the medicines and the JavaScript frontend was used to show the data and find the average price of a medicine.

Backend
I constructed the server with FastAPI which would take charge of the CRUD operations (Create, Read, Update, Delete) for medicine inventory. The information was kept intact in a JSON file (data.json), whereas FastAPI’s Form was employed to send messages via HTTP (POST) requests with medicine data embedded in them. Regarding the GET requests, I made sure that the backend sent back all the medicines or the specific medicine according to the name provided.

Frontend
I ran the FastAPI backend in JavaScript and pulled out the medicines, and after handling the data, I displayed it in the list using the fetch() API. In addition, the price of the medicines was calculated dynamically using JavaScript and shown in the header.

Additionally, a form was implemented in the frontend to allow users to add new medicines. This form collected the medicine's name and price, sent the data to the backend using a POST request, and displayed a confirmation message upon successful submission. This functionality made the frontend interactive and user-friendly, ensuring seamless communication with the backend.


## Objectives - Innovative Solutions
### 1. Fetching Data from Backend and Displaying It
What Happens:

The frontend requests data from the backend (API).
The data (medicine name and price) is displayed in a list.
Steps:

Make a GET request to fetch medicines.
Show the medicines (name and price) in a list on the page.
Code Example:

        // Fetch the medicines data
        fetch('http://localhost:8000/medicines')
            .then(response => response.json())
            .then(data => {
                displayMedicines(data); // Call function to show medicines
            })
            .catch(error => console.log("Error fetching data:", error));

        function displayMedicines(data) {
            const medicineList = document.getElementById('medicine-list');
            data.medicines.forEach(medicine => {
                const listItem = document.createElement('li');
                listItem.textContent = `${medicine.name}: $${medicine.price}`;
                medicineList.appendChild(listItem);
            });
        }

### 2. Handling Missing or Invalid Data
What Happens:

If the data has missing or invalid fields (like empty name or price), the frontend shows a warning instead of crashing.
Steps:

Check if the name and price are valid for each medicine.
If something is missing or incorrect, show an error message.
Code Example:


        function displayMedicines(data) {
            const medicineList = document.getElementById('medicine-list');
            data.medicines.forEach(medicine => {
                if (!medicine.name || !medicine.price) {
                    const errorItem = document.createElement('li');
                    errorItem.textContent = "Invalid or missing data.";
                    medicineList.appendChild(errorItem);
                } else {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${medicine.name}: $${medicine.price}`;
                    medicineList.appendChild(listItem);
                }
            });
        }

### 3. Sending Data to the Backend (User-Friendly)
What Happens:

The frontend allows users to add a new medicine (name and price) through a form.
When the form is submitted, it sends the data to the backend using a POST request.
Steps:

Create a simple form where users enter medicine details.
When the form is submitted, send the data to the backend using a POST request.
Show a confirmation message after submitting.
Code Example:

HTML Form:


        <form id="medicine-form">
            <label for="name">Medicine Name:</label>
            <input type="text" id="name" required><br>
            <label for="price">Price:</label>
            <input type="number" id="price" required><br>
            <button type="submit">Add Medicine</button>
        </form>

JavaScript for Form Submission:

        const form = document.getElementById('medicine-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;

            fetch('http://localhost:8000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name, price: price }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message); // Show success message
            })
            .catch(error => console.log('Error:', error));
        });

### 4. Improving Design and User Experience (UX)
What Happens:

We improve the design to make the page look better and easier to use.
Steps:

Use CSS to make the page responsive (works well on mobile).
Improve the form with clear labels, buttons, and input fields.
Add hover effects to buttons for better interaction.
Optionally, show a loading spinner while fetching data or submitting a form.
Code Example:


        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        input, button {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        @media screen and (max-width: 768px) {
            body {
                padding: 10px;
            }

            form {
                width: 100%;
            }
        }

### 5. API and Frontend Documentation
API Endpoints:

GET /medicines: Fetches a list of medicines (name and price).
POST /create: Adds a new medicine with the name and price.
POST /update: Updates the price of a medicine.
DELETE /delete: Deletes a medicine by name.
Frontend Structure:

A list of medicines is fetched from the backend and displayed in a list.
A form allows the user to add new medicines to the list.
The frontend is designed to be simple, mobile-friendly, and easy to use.


## Problems Faced
Calculating the Average Price: The calculation for the average price was really my biggest worry when I first got a question of how to be sure that only valid prices are used and no errors are caused due to null or missing values. I handled it by using JavaScript's filter() and reduce() function to deal with the invalid prices and derive the average without messing up the concept.

UI/UX for Edge Cases: The UI in the case when the stock is out or the product is not even available displayed the adequate and right information to be seen by the user was the problem that I have to improve a good deal. In this way, I've included a fallback text when data is missing, and I've properly handled the situations in which no medicines are available for displaying.

I was encountering an issue where I was unable to add a new medicine through the form on my website. The system was saying that the method was not allowed 405 Method Not Allowed error. I found out that the frontend was conveying the data in JSON format, but the backend wanted it to be in form format by submitting the proper form on the webpage. The backend, because the front and backs are inappropriate handling of the data, was one therefore it gave me this error.
In order to correct it, I amended the server side to bear JSON data rather than the form data. In that case the server was actually able to get the data from the client side to me and now I have no problems in the new data.


## Evaluation
Overall, this project demonstrates solid full-stack development skills. The project is functional, well-structured, and provides the core functionality needed for a simple medicine management system. However, there are opportunities for improvement, particularly around validation, error handling, and scalability. Addressing these areas will make the application more robust, secure, and user-friendly.