export default class Bold extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<a class="bold">${this.innerHTML}</a>`;
    }
}