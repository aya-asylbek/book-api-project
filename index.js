import express from 'express';
import cors from 'cors';
//import {BOOKS} from './books.js';to get data locally
import pool from './db.js'; // Import the PostgreSQL pool

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


// Route to get all books locally with no postgres
// app.get('/books', (req, res) => {
//   res.json(BOOKS);  // Send imported data as JSON response
// });


//GET all books from PostgreSQL
app.get('/books', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

//(get book by id -locally )
// app.get('/book/:id', (req, res) => {
// const bookId = parseInt(req.params.id, 10); // Make sure the book ID is converted to a number
// const book = BOOKS.find(b => b.id === bookId); // Find the book by ID
// });

//GET book by ID (Using postgres)
app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


//POST (Create new book using postgres)
app.post('/books', async (req, res) => {
  try {
    const { title, author, format } = req.body;
    const result = await pool.query(
      'INSERT INTO books (title, author, format) VALUES ($1, $2, $3) RETURNING *',
      [title, author, format]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


//PUT (Update a book by ID using postgres)
app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, format } = req.body;

    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, format = $3 WHERE id = $4 RETURNING *',
      [title, author, format, id]
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


//DELETE (Remove a book)
app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length > 0) {
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log('Server running on port 3000');
});
