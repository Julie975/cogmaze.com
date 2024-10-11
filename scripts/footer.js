const FOOTER = `
    <footer>
        <div>
            <p>
                <a class="pointer" href="mailto:enquiries@cogmaze.com" style="color: #534f4f; text-decoration: none;">
                    enquiries@cogmaze.com
                </a>
            </p>
        </div>

        <div>
            <a href="https://www.instagram.com/cogmaze_publishing/">
                <img class="pointer logo" src="assets/socials/instagram.svg" width="25" alt="instagram-logo">
            </a>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = FOOTER;
    }
}

customElements.define("footer-element", Footer);