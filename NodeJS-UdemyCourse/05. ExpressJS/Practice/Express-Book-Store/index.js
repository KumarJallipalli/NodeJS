const express = require("express");

const app = express();
const PORT = 8000;

// In Memory DB [ as we Don't have a DB now ]
const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

// middleware Plugin
app.use(express.json());

// Routes
app.get("/books", (req, res) => {
  return res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "id must be of Type Number" });
  }

  const book = books.find((i) => {
    return i.id === id;
  });
  if (book) {
    return res.json(book);
  } else {
    return res.status(404).json({ error: `Book with id ${id} Not Found` });
  }
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || title === "")
    return res.status(400).json({ error: "Title is required" });
  if (!author || author === "")
    return res.status(400).json({ error: "Author is required" });

  const id = books.length + 1;
  const book = { id, title, author };
  books.push(book);
  return res.status(201).json({ Message: "Book is Successfully Added", id });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });

  const indexToDelete = books.findIndex((i) => i.id === id);
  if (indexToDelete < 0)
    return res.status(404).json({ error: `Book with id ${id} not found` });

  books.splice(indexToDelete, 1);
  return res.json({ Message: "Book is Deleted", id });
});

app.listen(PORT, () => {
  console.log("Server is Running on PORT : 8000");
});
