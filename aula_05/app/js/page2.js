function getUsers() {
  $.ajax({
    url: 'https://5fb3fdf5e473ab0016a16041.mockapi.io/api/v1/users', //mocka api, onde tem as informações
    success: renderUsers,
    type: "GET",
    error: function() {
      alert('Api não localizada')
    }
  });
}

function renderUsers(response) {
 
  response.reverse().forEach(function(item){ //renderiza de cima pra baixo, o parâmetro item é o response recebido

    $("table tbody").append(` 
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.jobTitle}</td>
        <td>${item.email}</td>
        <td><img src="${item.avatar}"></td>
      </tr>
    `); //append adiciona html, isso é um código jQuery
        //Colocando como informação as informações do objeto response



  })
}

getUsers();