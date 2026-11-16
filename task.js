export default class Task {
  constructor(text, category, completed) {
    this.text = text;
    this.category = category;
    this.completed = completed;
  }

  render() {
    const task = document.createElement("div");
    const text = document.createElement("p");
    const button = document.createElement("button");

    text.textContent = `${this.category}: ${this.text}`;
    button.textContent = this.completed ? "Completed" : "Complete";

    if (this.completed) {
      text.style.textDecoration = "line-through";
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      this.completed = true;
      text.style.textDecoration = "line-through";
      button.textContent = "Completed";
      button.disabled = true;
    });

    task.append(text, button);
    return task;
  }
}
