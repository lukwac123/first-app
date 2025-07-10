const BookDescription = (props) => {
    return (
        <div>
            <h1>{props.book.title}</h1>
            <h2>{props.book.author}</h2>
            <h4>Pages: {props.book.pages}</h4>
            <hr />
        </div>
    );
    
}

export default BookDescription;
