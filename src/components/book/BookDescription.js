import PropTypes from "prop-types";

const BookDescription = (props) => {
    const book = props.book || {
        title: "Tytuł książki (domyślny)",
        author: "Autor książki (domyślny)",
        pages: "Liczba stron (domyślna)"
    };

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h4>Pages: {book.pages}</h4>
            <hr />
        </div>
    );
};

BookDescription.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        pages: PropTypes.string
    }),
};

export default BookDescription;
