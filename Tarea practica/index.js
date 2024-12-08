document.getElementById('load-data-btn').addEventListener('click', loadData);

function loadData() {
  const apiURL = 'https://jsonplaceholder.typicode.com/users';
  const userList = document.getElementById('user-list');

  userList.innerHTML = '';

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}
