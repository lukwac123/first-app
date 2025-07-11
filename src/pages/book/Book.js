import React, { Component } from "react";
import BookDescription from "../../components/book/BookDescription";
import Heder from "../../components/partial/Heder";
import Footer from "../../components/partial/Footer";

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    title: "Hobbit",
                    author: "J. R. Tolkien",
                    pages: "455"
                },
                                {
                    title: "Rok 1984",
                    author: "G. Orwel",
                    pages: "455"
                },
                                {
                    title: "Władca Pierścieni",
                    author: "J. R. Tolkien",
                    pages: "669"
                },
                                {
                    title: "Stary człowiek i morze",
                    author: "E. Hemigway",
                    pages: "226"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Heder />
                {
                    this.state.books.map((book, index) => (
                        <BookDescription key={index}  book={book}/>
                    ))
                }
                <Footer />
            </div>
        );
    }
}

export default Book;
