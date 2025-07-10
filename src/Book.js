const book = {
    title: "Hobbit",
    author: "J. R. Tolkien",
    pages: "455"
};

function Book() {
    return (
        <div className="App">
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h3>Pages: {book.pages}</h3>
        </div>
    );
}

export default Book;
