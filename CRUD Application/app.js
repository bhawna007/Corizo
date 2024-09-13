let selectedRow = null;

// Show alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".mainCenter");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear all fields
function clearFields() {
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#rollNumber").value = "";
}

// Add or Edit data
document.querySelector("#studentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const rollNumber = document.querySelector("#rollNumber").value;

    // Validate
    if (firstname === "" || lastname === "" || rollNumber === "") {
        showAlert("Please fill in all fields", "danger");
    } else {
        if (selectedRow === null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${rollNumber}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
            `;
            list.appendChild(row);
            showAlert("Student Added", "success");
        } else {
            selectedRow.children[0].textContent = firstname;
            selectedRow.children[1].textContent = lastname;
            selectedRow.children[2].textContent = rollNumber;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }
        clearFields();
    }
});

// Edit data
document.querySelector("#student-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.closest('tr');
        document.querySelector("#firstname").value = selectedRow.children[0].textContent;
        document.querySelector("#lastname").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNumber").value = selectedRow.children[2].textContent;
    }
});

// Delete data
document.querySelector("#student-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete")) {
        target.closest('tr').remove();
        showAlert("Student Data Deleted", "danger");
    }
});
