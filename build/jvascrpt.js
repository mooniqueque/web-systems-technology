let id = 0; // Initialize ID

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('regForm'); // Get the form

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform validation here
        // If validation passes, call appendValues
        appendValues(event);
    });

    function appendValues(event) {
        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        // Create a new row
        const row = document.createElement('tr');

        // Add data to the row
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

        // Append the row to the table
        const tbody = document.querySelector('.table-auto tbody');
        tbody.appendChild(row);

        // Add event listeners to the buttons
        row.querySelector('.edit').addEventListener('click', editRow);
        row.querySelector('.delete').addEventListener('click', deleteRow);

        // Change font color and add border to the new row
        row.style.border = '2px solid #4b5563';
        row.style.borderRight = '2px solid #4b5563';
    }

    function editRow(event) {
        // Edit row function
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1];
        const email = row.children[2];
        const role = row.children[3];

        // Replace table data with input fields
        username.innerHTML = `<input type="text" id="editUsername" value="${username.textContent}">`;
        email.innerHTML = `<input type="text" id="editEmail" value="${email.textContent}">`;
        role.innerHTML = `<input type="text" id="editRole" value="${role.textContent}">`;

        // Change 'Edit' button to 'Save'
        button.innerHTML = '<i class="fas fa-save"></i>';
        button.removeEventListener('click', editRow);
        button.addEventListener('click', saveRow);
    }

    function saveRow(event) {
        // Save row function
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        const username = row.children[1].querySelector('input');
        const email = row.children[2].querySelector('input');
        const role = row.children[3].querySelector('input');

        // Replace input fields with table data
        username.parentNode.textContent = username.value;
        email.parentNode.textContent = email.value;
        role.parentNode.textContent = role.value;

        // Change 'Save' button back to 'Edit'
        button.innerHTML = '<i class="fas fa-edit"></i>';
        button.removeEventListener('click', saveRow);
        button.addEventListener('click', editRow);
    }

    function deleteRow(event) {
        // Delete row function
        const button = event.target.parentNode;
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});