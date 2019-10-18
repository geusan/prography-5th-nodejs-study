class Book {

  constructor(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }

  static newInstance(title, author, price) {
    const id = `${Date.now()}`;
    return new Book(id, title, author, price);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      price: this.price,
    };
  }

  static fromData(data) {
    return new Book(data.id, data.title, data.author, data.price);
  }
}

module.exports = Book;
