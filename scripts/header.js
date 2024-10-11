const HEADER = `
    <header>
        <h1 class="header-title comfortaa-medium">Cogmaze</h1>
        <h2 class="header-2 comfortaa-light">- PUBLISHING -</h2>

        <ul class="header-list">
            <li class="expand">
                <a href="index.html">Home</a>
            </li>
            <li class="expand">
                <a href="about.html">About</a>
            </li>
            <li class="expand">
                <a href="https://juliealisonmcdonald.square.site">Shop</a>
            </li>
            <li class="expand">
                <a href="resources.html">Resources</a>
            </li>
            <li class="expand">
                <a href="contact.html">Contact</a>
            </li>
        </ul>
    </header>
`;

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = HEADER;
    }
}

customElements.define("header-element", Header);