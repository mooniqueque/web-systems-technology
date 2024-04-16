let id = 0;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('regForm'); 

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        appendValues(event);
    });
    
    // Get values
    function appendValues(event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td style="border-right: 2px solid #4b5563; text-align: center;">${++id}</td>
            <td style="border-right: 2px solid #4b5563; text-align: center;">${username}</td>
            <td style="border-right: 2px solid #4b5563; text-align: center;">${email}</td>
            <td style="border-right: 2px solid #4b5563; text-align: center;">${role}</td>
            <td style="text-align: center;">
                <button class="edit" style="margin-right: 10px;">
                    <i class="fas fa-edit" style="color: blue;"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash" style="color: red;"></i>
                </button>
            </td>
        `;

        // Append the row 
        const tbody = document.querySelector('.table-auto tbody');
        tbody.appendChild(row);

        row.querySelector('.edit').addEventListener('click', editRow);
        row.querySelector('.delete').addEventListener('click', deleteRow);

        row.style.border = '2px solid #4b5563';
        row.style.borderRight = '2px solid #4b5563';
    }
    
    // Edit row 
    function editRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1];
        const email = row.children[2];
        const role = row.children[3];

        username.innerHTML = `<input type="text" id="editUsername" value="${username.textContent}">`;
        email.innerHTML = `<input type="text" id="editEmail" value="${email.textContent}">`;
        role.innerHTML = `<input type="text" id="editRole" value="${role.textContent}">`;

        button.innerHTML = '<i class="fas fa-save"></i>';
        button.removeEventListener('click', editRow);
        button.addEventListener('click', saveRow);
    }
    
    // Save row 
    function saveRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1].querySelector('input');
        const email = row.children[2].querySelector('input');
        const role = row.children[3].querySelector('input');

        username.parentNode.textContent = username.value;
        email.parentNode.textContent = email.value;
        role.parentNode.textContent = role.value;

        button.innerHTML = '<i class="fas fa-edit"></i>';
        button.removeEventListener('click', saveRow);
        button.addEventListener('click', editRow);
    }

    // Delete row 
    function deleteRow(event) {
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});