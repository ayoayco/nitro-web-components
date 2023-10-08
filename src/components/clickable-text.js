import WebComponent from "https://unpkg.com/web-component-base/index.js";

export default class ClickableText extends WebComponent {
  onInit() {
    this.onclick = () => alert("Thank you for clicking the text!");
  }
  get template() {
    return `<span style="cursor:pointer">Click me too!</span>`;
  }
}