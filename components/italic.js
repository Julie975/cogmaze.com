export default class Italic extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<a class="italic">${this.innerHTML}</a>`;
    }
}