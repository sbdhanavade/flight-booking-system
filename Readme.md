# Flight Database Management System

This is a full-stack flight booking web application I developed using Django and React. It allows users to search flights, book tickets, and view passenger details. The goal was to create a simple and responsive system that mimics a real-world airline booking experience.

---

## Features

- View available flights with origin, destination, and schedule
- Search for flights by city (origin or destination)
- Book a flight by entering name and email
- See a live list of passengers booked on a selected flight
- Clean and responsive UI with a background image

---

## Tech Stack

- **Frontend:** React.js, Bootstrap, Axios
- **Backend:** Django, Django REST Framework
- **Database:** SQLite3 (local setup)
- **Styling:** Custom CSS + Bootstrap
- **Testing Tools:** Postman, Django Admin

---

## How to Run the Project Locally

### 1. Clone the repo
git clone https://github.com/your-username/flight-database-system.git
cd flight-database-system

2. Set up the Django backend
cd flight_database
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
Visit the API:
http://127.0.0.1:8000/api/flights/
Admin Panel:
http://127.0.0.1:8000/admin/

3. Set up the React frontend

cd ../frontend
npm install
npm start
Open the frontend:
http://localhost:3000

**What I Learned**
Building and consuming REST APIs with Django

Managing state and API integration in React

Implementing search, booking, and data display logic

Designing responsive layouts using Bootstrap

Debugging and connecting full-stack applications

 **Author**
Shubham Dhanavade
Full-Stack Developer | Graduate Student
.
