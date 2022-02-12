let library = [];
const temp = document.querySelector('.book');
const bookshelf = document.querySelector('#bookshelf');
let idBook = library.length;

function Book(title, author) {
  this.id = idBook;
  this.title = title;
  this.author = author;

  idBook += 1;
}

function SaveBook(title, author) {
  const book = new Book(title, author);
  if (!Array.isArray(library)) {
    library = [];
  }
  library.push(book);

  localStorage.library = JSON.stringify(library);

  ReloadLibrary();
}

function AddBook() {
  event.preventDefault();
  const formAddBook = document.forms.AddBook;
  const bookData = new FormData(formAddBook);
  const bookTitle = bookData.get('title');
  const bookAuthor = bookData.get('author');
  formAddBook.reset();
  SaveBook(bookTitle, bookAuthor);
}

