const createLibraryManager = require('./libraryManager')'
const library = createLibraryManager () ;
library.addBook(1, "The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 3, 5, [5, 4, 5]);
library.addBook(2, "1984", "George Orwell", "Dystopian", 0, 7, [4, 5, 5]);
library.addBook(3, "To Kill a Mockingbird", "Harper Lee", "Fiction", 5, 6, [3, 4, 2]);

console.log(library.getBookDetails(2));
console.log(library.getOutOfStockBooks());
console.log(library.getCategoryBreakdown());
console.log(library.getTopRatedBook());
console.log(library.getLowRatedBooks());

library.addBook(4, "Moby Dick", "Herman Melville", "Classic", 2, 5, [3, 2, 4]);
library.addBook(5, "Pride and Prejudice", "Jane Austen", "Romance", 0, 4, [5, 5, 5]);
library.addBook(6, "Brave New World", "Aldous Huxley", "Dystopian", 1, 3, [2, 3, 2]);

console.log(library.getBookDetails(5));
console.log(library.getOutOfStockBooks());
console.log(library.getCategoryBreakdown());
console.log(library.getTopRatedBook());
console.log(library.getLowRatedBooks());
