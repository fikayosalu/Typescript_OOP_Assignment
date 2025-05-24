"use strict";
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`"${book.name}" was successfully added`);
    }
}
class Book {
    constructor(name, num) {
        this.name = name;
        this.noInStock = num;
    }
}
class Member {
    constructor(name, genre) {
        this.borrowedBooks = [];
        this.name = name;
        this.favoriteGenre = genre;
    }
    borrowBook(book) {
        if (!this.borrowedBooks.includes(book)) {
            if (book.noInStock > 0) {
                this.borrowedBooks.push(book);
                book.noInStock--;
            }
            console.log(`${book.name} borrowed by ${this.name}`);
        }
    }
    returnBook(book) {
        if (this.borrowedBooks.includes(book)) {
            this.borrowedBooks = this.borrowedBooks.filter((item) => {
                return item !== book;
            });
            book.noInStock++;
        }
        else {
            console.log(`${this.name} my nigga you don't even have the book`);
        }
    }
}
const book1 = new Book("Native Son", 25);
const lib = new Library();
lib.addBook(book1);
const user = new Member("Dayo");
const user32 = new Member("Ade");
const user24 = new Member("Tolu");
user.borrowBook(book1);
console.log(user.borrowedBooks);
user32.borrowBook(book1);
console.log(user32.borrowedBooks);
console.log(lib.books);
user32.returnBook(book1);
console.log(user32.borrowedBooks);
user24.returnBook(book1);
console.log(user24.borrowedBooks);
