$(document).ready(function () {
  async function consultarUsers() {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    console.log(data);

    for (const property in data[0]) {
      // console.log(property);
      $(".headTr").append(`<th>${property.toUpperCase()}</th>`);
    }

    for (let i = 0; i < data.length; i++) {
      const user = data[i];
      const tbody = $(".tbody");
      const tr = $(`<tr class="trBody"></tr>`);

      for (const property in user) {
        tr.append(`<td>${user[property]}</td>`);
        tbody.append(tr);
      }
    }
  }

  $("button").on("click", () => {
    consultarUsers();
  });
});
