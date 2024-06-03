let botaoTarefa = document.querySelector("#botaoTarefa")
let input = document.querySelector("#todo-input")

botaoTarefa.addEventListener("click", (e) => {
  criarTarefa()
})

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    criarTarefa()
  }
})


// Funções

function criarTarefa() {
  let todoList = document.querySelector("#todo-list")
  let input = document.querySelector("#todo-input")
  let todo = document.querySelector("#todo")

  if (input.value === "") {
    return alert("Digite algo")
  }


  let tarefa = document.createElement("div")
  tarefa.classList.add("todo")

  let tituloTarefa = document.createElement("h4")
  tituloTarefa.textContent = input.value
  tarefa.appendChild(tituloTarefa)


  let btnCheck = document.createElement("button")
  btnCheck.classList.add("btnStyle")
  tarefa.appendChild(btnCheck)
  btnCheck.innerHTML = '<i class="fas fa-check-double"></i>'

  let btnEdit = document.createElement("button")
  btnEdit.classList.add("btnStyle")
  tarefa.appendChild(btnEdit)
  btnEdit.innerHTML = '<i class="fa fa-pen"></i>'

  let btnDel = document.createElement("button")
  btnDel.classList.add("btnStyle")
  tarefa.appendChild(btnDel)
  btnDel.innerHTML = '<i class="fas fa-times"></i>'

  todoList.appendChild(tarefa)

  input.value = ""

  //Eventos

  btnCheck.addEventListener("click", (e) => {
    e.preventDefault();
    let targetEl = e.target
    let parentEl = targetEl.closest("div")
    let parentBtn = document.querySelectorAll("button")

    parentEl.classList.toggle("todo-done")
    btnEdit.classList.toggle("hide")

    parentBtn.forEach(function (btn) {
      if (parentEl.contains(btn)) {
        btn.classList.toggle("done-btn")
      }

    })



  })

  // Botão de edição

  btnEdit.addEventListener("click", (e) => {
    let targetEl = e.target
    let parentEl = targetEl.closest("div")


    let todos = document.querySelectorAll(".todo")

    todos.forEach(function (todo) {
      todo.classList.toggle("hide")
    })

    document.querySelector("#botaoTarefa").classList.toggle("hide")
    document.querySelector("#todo-input").classList.toggle("hide")

    let editContainer = document.createElement("div")
    editContainer.classList.add("edit-container")
    document.querySelector("#input-container").appendChild(editContainer)

    let editInput = document.createElement("input")
    editContainer.appendChild(editInput)


    editInput.value = parentEl.textContent


    let confirmEdit = document.createElement("button")
    editContainer.appendChild(confirmEdit)
    confirmEdit.innerHTML = '<i class="fas fa-check-double"></i>'

    confirmEdit.addEventListener("click", (e) => {
      if (editInput.value === "") {
        return alert("Digite algo")
      }

      let editValue = editInput.value
      let editValueTitle = document.createElement("h4")
      editValueTitle.textContent = editInput.value

      todos.forEach(function (todo) {
        todo.classList.toggle("hide")
      })

      document.querySelector("#botaoTarefa").classList.toggle("hide")
      document.querySelector("#todo-input").classList.toggle("hide")
      editContainer.remove()
      parentEl.textContent = ""
      parentEl.appendChild(editValueTitle)
      editInput.remove()

      parentEl.appendChild(btnCheck)
      btnCheck.classList.remove("hide")
      parentEl.appendChild(btnEdit)
      btnEdit.classList.remove("hide")
      parentEl.appendChild(btnDel)
      btnDel.classList.remove("hide")


    })

    editInput.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {

        if (editInput.value === "") {
          return alert("Digite algo")
        }


        let editValueTitle = document.createElement("h4")
        editValueTitle.textContent = editInput.value

        todos.forEach(function (todo) {
          todo.classList.toggle("hide")
        })

        document.querySelector("#botaoTarefa").classList.toggle("hide")
        document.querySelector("#todo-input").classList.toggle("hide")
        editContainer.remove()
        parentEl.textContent = ""
        parentEl.appendChild(editValueTitle)
        editInput.remove()

        parentEl.appendChild(btnCheck)
        btnCheck.classList.remove("hide")
        parentEl.appendChild(btnEdit)
        btnEdit.classList.remove("hide")
        parentEl.appendChild(btnDel)
        btnDel.classList.remove("hide")

      }
    })


  })

  // botão remove
  btnDel.addEventListener("click", (e) => {
    let targetEl = e.target
    let parentEl = targetEl.closest("div")
    
    parentEl.classList.add("remove-animation")

    setTimeout(() => {
      parentEl.remove()
    }, 400);
    
  })
}