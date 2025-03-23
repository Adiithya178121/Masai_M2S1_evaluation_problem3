const createLibraryManager = () => {
  const books = {};
  const calculateAverageRating = (ratings) => 
    if(ratings.length === 0) {
    return 0;
  }
  return {
    addBook(bookID, title, author, category, copiesAvailable, totalCopies, ratings) {
      books[bookID] = {title, author, category, copiesAvailable, totalCopies, ratings);
    },
    updateCopies(bookID, newCopiesAvailable) {
        if(books[bookID]){
          books[bookID].copiesAvailable = newCopiesAvailable ;
        },
    addRating(bookID, rating) {
       if(books[bookID]){ 
          books[bookID].ratings.push(rating);
       }
    },
    getBookDetails(bookID) {
      if (books[bookID]) {
        return books[bookID];
      }
      else {
        return "Book not found "
      }

    },
    getTotalBooks() {
      return Object.keys(books).length;
    },
    getOutofStockBooks() {
      return Object.entries(books).filter(([_ , book] => ({bookID , ...book}));
    },
    getCategoryBreakdown(){
      const categories = {};
      Object.values(books).forEach((book) => {
        if (categories[book.category]) {
          categories[book.category]++;
          }
        else {
          categories[book.category] = 1;
        }
      });
      return categories ;
    },
    getTopRatedBook(){
      let topBook = null;
      let topRating = -1 ;
      Object.entries(books).forEach(([bookID,book]) => {
        const avgRating =  calculateAverageRating(book.ratings);
        if (avgRating > topRating){
          topRating = avgRating;
          topBook = {bookID, ...book};
        }
      });
    },

  getLowRatedBooks(){
    return Object.entries(books).filter(([ _ ,book]) => calculateAverageRating(book.ratings) < 3.0)
    .map(([bookID, book]) => ({bookID, ...book}));
  },
    getSortedBooks(sortby) {
      return Object.entries(books).map(([bookID,book]) =>({bookID, ...book}))
      .sort((a,b) => { 
        if (sortby === "title"){
          return a.title.localCompare(b.title);
        }
        else if (sortby === "ratings"){
          return calculateAverageRating(b.rating) - calculateAverageRating(a.rating)
        }
        return 0 ;
      });
    },
    
    

    
  };
};
module.export = createLibraryManager;
