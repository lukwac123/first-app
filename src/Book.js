import React, { Component } from "react";
import Heder from "./Heder";
import Footer from "./Footer";

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: "Hobbit",
                author: "J. R. Tolkien",
                pages: "455"
            }
            
        }
    };

    render() {
        return (
            <div>
                <Heder />
                <h1>{this.state.book.title}</h1>
                <h2>{this.state.book.author}</h2>
                <h4>Pages: {this.state.book.pages}</h4>
                <Footer />
            </div>
        );
    }
}

export default Book;