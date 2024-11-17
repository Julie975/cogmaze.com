export default class Book extends HTMLElement {
    connectedCallback() {
        const content = `
        
<div class="grid-item">
    <a href="${this.getAttribute("link")}">
        <img class="book-image" src="${this.getAttribute("image")}" />
    </a>
</div>
        `;

        this.innerHTML = content;
    }
}