function TodoList({ $app, initialState, onTodoClick}) {
  if(!new.target) throw new Error("new 키워드를 추가해주세요");
  if(!validationCheck(data)) throw new Error("데이터 형식을 올바르게 넣어주세요");

  this.$target = document.createElement("ul");
  this.state = initialState;
  $app.appendChild(this.$target);
  

  //이벤트 위임
  this.$target.addEventListener("click", (event) => {
    const $target = event.target.closest("li");
    if ($target) {
      const {index} = $target.dataset;
      onTodoClick(parseInt(index));
    }
  })

  this.render = () => {
    this.$target.innerHTML = this.state.map(({text, isCompleted}, index) => isCompleted 
    ? `<li data-index=${index}><s>${text}</s></li>` 
    : `<li data-index=${index}>${text}</li>`)
    .join(" ");
  }

  this.setState = (nextState) => {
    if(!validationCheck(nextState)) throw new Error("데이터 형식을 올바르게 넣어주세요");
        this.state = nextState;
        this.render();
  }
  this.render();
}

const validationCheck = (data) => {
  // if(!data) {
  //   throw new Error("데이터가 없습니다.");
  // } else if (!Array.isArray(data)){
  //   throw new Error("데이터 타입이 Array가 아닙니다.");
  // }
  // data.forEach((data) => {
  //   if(typeof(data) === undefined) {
  //     throw new Error("데이터 형식이 잘못 되었습니다.");
  //   } else if(typeof(data.text) !== "string") {
  //     throw new Error("데이터 타입이 string이 아닙니다.")
  //   } else if (typeof(data.isCompleted) !== "boolean") {
  //     throw new Error("데이터 타입이 boolean이 아닙니다.")
  //   }
  // })
  return true;
}
