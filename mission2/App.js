function App ({$target, initialState}) {
  this.state = initialState;
  this.$app = document.createElement("div");
  this.$app.className = "app"
  $target.appendChild(this.$app);


  const todoList = new TodoList({
    $app: this.$app,
    initialState: this.state,
    onTodoClick : (clickedIndex) => {
      const nextState = [...this.state];
      console.log(clickedIndex)
      nextState[clickedIndex].isCompleted = !nextState[clickedIndex].isCompleted;

      this.setState(nextState);
    }
  });

  const todoInput = new TodoInput({
    $app: this.$app,
    onAddTodo : (text) => {
      this.setState([
        ...this.state,
        {
          text,
          
        }
      ])
    }
  })

  const todoCount = new TodoCount({
    $app: this.$app,
    initialState: this.state
  })

  this.setState = (nextState) => {
    storage.save("todos", nextState);
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    todoList.setState(this.state);
    todoCount.setState(this.state);
  }

  window.addEventListener("remove-all", () => {
    this.setState([])
  })
}