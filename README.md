Book API Project

This is a simple API to manage a collection of books using Express and PostgreSQL.

Features

GET /books - Retrieve all books from the database.
GET /books/:id - Retrieve a specific book by its ID.
POST /books - Add a new book to the database.
PUT /books/:id - Update an existing book by its ID.
DELETE /books/:id - Delete a book by its ID.

Technologies Used

Node.js - JavaScript runtime environment.
Express - Web framework for Node.js.
PostgreSQL - Relational database to store book data.
pg (node-postgres) - PostgreSQL client for Node.js.
Cors - Middleware for enabling cross-origin requests.

Setup
1. Clone the repository

git clone https://github.com/your-username/book-api-project.git


cd book-api-project

2. Install dependencies

Make sure you have Node.js installed. Then, run:

npm install

3. Setup PostgreSQL Database

Make sure PostgreSQL is installed and running.
Create a database called books (or adjust the database name in db.js).
Create a table for books:

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  format VARCHAR(50) NOT NULL
);

4. Configure Database

In db.js, adjust the database connection settings to match your local PostgreSQL configuration:

const pool = new Pool({
  user: 'your-username',  // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'books',
  port: 5432,
});

<img width="1680" alt="Screenshot 2025-02-24 at 1 06 57 PM" src="https://github.com/user-attachments/assets/fa190818-c330-4d36-b7c3-a7b4e6f28c10" />


5. Run the Application

Start the server:

npm start

The server will start running on http://localhost:3000

Type in browser http://localhost:3000/books and you will see all books from list:

 <img width="1680" alt="Screenshot 2025-02-24 at 10 43 58 AM" src="https://github.com/user-attachments/assets/6d824ba6-8195-406c-a557-b0102287a841" />

Type in browser http://localhost:3000/books/1 or through Postman and you will see 1st book from the list!(If you change to 2 ,you will see 2nd book and etc)

<img width="1680" alt="Screenshot 2025-02-24 at 10 48 07 AM" src="https://github.com/user-attachments/assets/c21c7542-c9a5-48df-8179-9938208e4c00" />


Use Postman to test the API by sending HTTP requests:

GET /books to retrieve all books.
GET /books/:id to retrieve a book by its ID.
POST /books to add a new book.
PUT /books/:id to update an existing book.
DELETE /books/:id to delete a book.

Example Requests


<img width="1680" alt="Screenshot 2025-02-24 at 10 44 28 AM" src="https://github.com/user-attachments/assets/69a88584-63c6-4a37-a882-c0e615d13ed4" />

1. Create a new book:
POST /books

Body (JSON):

{
  "title": "New Book Title",
  "author": "Author Name",
  "format": "Paperback"
}

2. Get all books:

GET /books

3. Update an existing book:
PUT /books/1

{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "format": "Hardcover"
}

4. Delete a book:

DELETE /books/1


License
This project is licensed under the MIT License - see the LICENSE file for details.
