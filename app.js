const addUser = () => {
  let table = document.querySelector("table")
  table.deleteTFoot()
  document.querySelector(".formDiv").style.display = "none"
  document.querySelector(".showForm").style.display = "block"
  let fname = document.querySelector("#fname")
  let email = document.querySelector("#email")
  let randomNum = Math.floor(Math.random() * 10000) + 1

  createNewUser(fname.value, email.value, randomNum)

  fname.value = ""
  email.value = ""
}

const createNewUser = (fname, email, id) => {
  let table = document.querySelector("table")
  var tr = table.insertRow(1)
  var cell1 = tr.insertCell(0)
  var cell2 = tr.insertCell(1)
  var cell3 = tr.insertCell(2)
  cell1.innerHTML = id
  cell2.innerHTML = fname
  cell3.innerHTML = email
  tr.onclick = () => {
    alert(`
      User Details are :-
      Id :- ${id},
      Full Name :- ${fname},
      Email Address :- ${email}
    `)
  }
}

const showForm = () => {
  document.querySelector(".showForm").style.display = "none"
  document.querySelector(".formDiv").style.display = "block"
}
