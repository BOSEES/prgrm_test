function TodoInput({$app, onAddTodo}) {
  this.$target = document.createElement("div");
  // this.onAddTodo = onAddTodo;
  $app.appendChild(this.$target);


  this.setState =() => {}
  this.render = () => {
    this.$target.innerHTML = `
      <input type="text">
      <button class="remove-all-button"> Remove All</button>
    `
  }

  this.render();

  this.$target.querySelector("input").addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      onAddTodo(e.target.value)
      // this.onAddTodo(e.target.value)
    }
  })

  this.$target.querySelector(".remove-all-button").addEventListener("click", (e) => {
    const event = new CustomEvent("remove-all");
    window.dispatchEvent(event);
  })
}