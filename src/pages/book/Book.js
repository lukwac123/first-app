import React, { Component } from "react";
import BookDescription from "../../components/book/BookDescription";
import Heder from "../../components/partial/Heder";
import Footer from "../../components/partial/Footer";

class Book extends Component {
    render() {
        return (
            <div>
                <Heder />
                <BookDescription />
                <Footer />
            </div>
        );
    }
}

export default Book;
