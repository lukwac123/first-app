import PropTypes from "prop-types";

const BookDescription = ({ book, onDelete }) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h4>Pages: {book.pages}</h4>
            <button onClick={() => onDelete(book.id)}>Usuń książkę</button>
            <hr />
        </div>
    );
};

BookDescription.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        author: PropTypes.string,
        pages: PropTypes.string
    }),
    onDelete: PropTypes.func
};

BookDescription.defaultProps = {
    book: {
        title: "Tytuł książki (domyślny)",
        author: "Autor książki (domyślny)",
        pages: "Liczba stron (domyślna)"
    },
    onDelete: () => {}
};

export default BookDescription;

