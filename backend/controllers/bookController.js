import Book from "../models/Book.js";

 //add book
export const addBook = async (req , res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
        
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
        
    }

}
 //get books
 export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//get book by id

export const getBookById = async (
  req,
  res
) => {
  try {
    const book = await Book.findById(
      req.params.id
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//update book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(
      req.params.id
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    const updatedBook =
      await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json(updatedBook);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//delete book
 export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(
      req.params.id
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    await book.deleteOne();

    res.status(200).json({
      message: "Book deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};