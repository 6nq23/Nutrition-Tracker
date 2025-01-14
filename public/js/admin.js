// Admin Panel JavaScript

// Add User Functionality
const addUserButton = document.querySelector('.admin-add-btn');
addUserButton.addEventListener('click', () => {
  const userName = prompt('Enter user name:');
  const userEmail = prompt('Enter user email:');

  if (userName && userEmail) {
    const tableBody = document.querySelector('.admin-table tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td>${Math.floor(Math.random() * 100)}</td>
      <td>${userName}</td>
      <td>${userEmail}</td>
      <td>
        <button class="admin-btn edit-btn">Edit</button>
        <button class="admin-btn delete-btn">Delete</button>
      </td>
    `;

    tableBody.appendChild(newRow);

    alert('User added successfully!');
  } else {
    alert('User name and email are required!');
  }
});

// Delete User Functionality
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      event.target.closest('tr').remove();
      alert('User deleted successfully!');
    }
  }
});

// Edit User Functionality
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-btn')) {
    const row = event.target.closest('tr');
    const userName = row.children[1].textContent;
    const userEmail = row.children[2].textContent;

    const newUserName = prompt('Edit user name:', userName);
    const newUserEmail = prompt('Edit user email:', userEmail);

    if (newUserName && newUserEmail) {
      row.children[1].textContent = newUserName;
      row.children[2].textContent = newUserEmail;

      alert('User details updated successfully!');
    } else {
      alert('User name and email are required to update!');
    }
  }
});
