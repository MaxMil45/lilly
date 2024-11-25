# Lilly Technical Challenge Documentation Template

## Approach
In this task, I took a piece-by-piece approach. I first made a primary outline for both backends and frontends, in each way. For example, I made sure that the FastAPI backend was in place to transport the medicines and the JavaScript frontend was used to show the data and find the average price of a medicine.

Backend:
I constructed the server with FastAPI which would take charge of the CRUD operations (Create, Read, Update, Delete) for medicine inventory.The information was kept intact in a JSON file (data.json) whereas FastAPI’s Form was employed to send messages via HTTP (POST) requests with medicine data embedded in them.Regarding the GET requests, I made sure that the backend sent back all the medicines or the specific medicine according to the name provided.

Frontend:
I ran the FastAPI backend in JavaScript and pulled out the medicines and then after handling the data I displayed it in the list of fetch() API.In addition, the price of the medicines was calculated dynamically by using JavaScript and shown in the header.


## Objectives - Innovative Solutions
I'm especially proud of the way I arranged the frontend and backend to guarantee that they communicate in a proper way and return the data that is needed.

Calculating the Average Price Dynamically: I used JavaScript for calculating the average price on the fly by filtering medicine prices that are valid (not null) and then finding the sum of all the prices and dividing by the number of medicines with valid prices. It was the dynamic calculation that was behind this challenge and it allows for real-time updates when the data changes. This was a dynamic calculation and was an essential challenge so that it can be done in real-time when the data changes.

Responsive Layout: The CSS flexbox is a great tool I used to do the layout format of the header which is a fast method showing the "Medicine Tracker" on the left and the "Average Price" on the right of the header.

Data Display: Rather than simply including a list of medicines whose names or prices might not show up, I have made sure that I am aware of the potential explanation cases when they occur, the scenario of an item having no price set, and if adding a fallback text when necessary along with increased user experience.

Frontend and Backend Integration: The smooth mutual relationship between JavaScript and FastAPI for not only retrieving data but for also sending updates was a bright spot in the challenge as I ensured them to operate in a perfect harmony.


## Problems Faced
Calculating the Average Price: The calculation for the average price was really my biggest worry when I first got a question of how to be sure that only valid prices are used and no errors are caused due to null or missing values. I handled it by using JavaScript's filter() and reduce() function to deal with the invalid prices and derive the average without messing up the concept.

UI/UX for Edge Cases: The UI in the case when the stock is out or the product is not even available displayed the adequate and right information to be seen by the user was the problem that I have to improve a good deal. In this way, I've included a fallback text when data is missing, and I've properly handled the situations in which no medicines are available for displaying.

I was encountering an issue where I was unable to add a new medicine through the form on my website. The system was saying that the method was not allowed 405 Method Not Allowed error. I found out that the frontend was conveying the data in JSON format, but the backend wanted it to be in form format by submitting the proper form on the webpage. The backend, because the front and backs are inappropriate handling of the data, was one therefore it gave me this error.
In order to correct it, I amended the server side to bear JSON data rather than the form data. In that case the server was actually able to get the data from the client side to me and now I have no problems in the new data.


## Evaluation
Overall, this project demonstrates solid full-stack development skills. The project is functional, well-structured, and provides the core functionality needed for a simple medicine management system. However, there are opportunities for improvement, particularly around validation, error handling, and scalability. Addressing these areas will make the application more robust, secure, and user-friendly.