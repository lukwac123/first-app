import React, { Component } from "react";
import BookDescription from "./BookDescription";
import Heder from "./Heder";
import Footer from "./Footer";

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
