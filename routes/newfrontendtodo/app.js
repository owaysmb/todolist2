let addtask = document.getElementById("add");
let deletetask = document.getElementById("delete");
let inp = document.getElementById("input");



// fetch all on opening the web
fetch('/tasks').then(function (data) {
  return data.json();
}).then(function (res) {
  for (var i = 0; i < res.length; i++) {
    var task = document.createElement('div');
    task.innerHTML = `<h3>${res[i].title || ''}</h3>`;
    document.querySelector('body').appendChild(task)
  }
})
addtask.addEventListener("click", addinfo);
function addinfo(e) {
  e.preventDefault();
  fetch('/task', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      title: inp.value,
    }),
  }).then(function (data) {
    return data.json();
  }).then(function (res) {
    console.log(res);
    var task = document.createElement('div');
    task.innerHTML = `<h3>${res.title}</h3>`;
    document.querySelector('body').appendChild(task)
  })
}
