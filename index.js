import express from 'express';
import cors from 'cors';
import {BOOKS} from './books.js';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());


// Route to get all books
app.get('/books', (req, res) => {
  res.json(BOOKS);  // Send imported data as JSON response
});

//(get book by id -locally )
app.get('/book/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10); // Make sure the book ID is converted to a number
  const book = BOOKS.find(b => b.id === bookId); // Find the book by ID
  
  if (book) {
    res.json(book);  // Return the book as a JSON response
  } else {
    res.status(404).json({ message: 'Book not found' });  // Error if the book is not found
  }
});

  //3. Right code for post (to create new book and check on postman)

//4. put (update all credentials=>>>all info)

// Delete (to delete one book for now )


app.listen(PORT, () => {
  console.log('Server running on port 3000');
});
