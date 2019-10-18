const BookRepository = require('../database/repositories/BookRepository')
const Book = require('../models/Book')

class BookService {

  constructor() {
    this.bookRepository = new BookRepository();
  }

  create(title, author, price) {
    const book = Book.newInstance(title, author, price);
    this.bookRepository.create(book.toJSON())
    return book;
  }

  find() {
    const booksData = this.bookRepository.find();
    return booksData.map((bookData) => Book.fromData(bookData));
  }

  findById(id) {
    const book = Book.fromData(this.bookRepository.findById(id));
    return book;
  }

  update(id, data) {
    const book = Book.fromData(this.bookRepository.findById(id));
    book.title = data.title || book.title;
    book.author = data.author || book.author;
    book.price = data.price || book.price;
    this.bookRepository.update(id, book.toJSON());
    return book;
  }

  delete(id) {
    console.log(this.bookRepository.delete(id));
  }
}

module.exports = BookService;
