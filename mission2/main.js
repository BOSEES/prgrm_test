const data = [
  {
    text :"JS 공부하기",
    isCompleted: false
  },
  {
    text: "JS 복습하기",
    isCompleted: true
  }
]

const $target = document.querySelector("main");

new App ({
  $target,
  initialState: storage.load("todos",[]) 
})