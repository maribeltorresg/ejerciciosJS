function getUsers() {
  fetch("http://localhost:9000/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getUser(id) {
  fetch(`http://localhost:9000/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getUsers();
getUser("639c017a99bc263d6d385579");
