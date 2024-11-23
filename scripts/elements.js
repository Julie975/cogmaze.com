// Utils
function define_element(element, name) {
    customElements.define(`${name}-element`, element);
}

function default_element(content, name) {
    class Element extends HTMLElement {
        connectedCallback() { this.innerHTML = content; }
    };

    define_element(Element, name);
}

// Default elements
import Header from "../components/header.js";
default_element(Header, "header");
import Footer from "../components/footer.js";
default_element(Footer, "footer");

// Custom elements
import Book from "../components/book.js";
define_element(Book, "book");

import Bold from "../components/bold.js";
define_element(Bold, "bold");

import Italic from "../components/italic.js";
define_element(Italic, "italic");