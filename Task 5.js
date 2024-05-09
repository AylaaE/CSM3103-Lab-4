// Function to add a new record to the table
function addRecord() {
    // Get the table body
    var tableBody = document.getElementById("employeeTable");

    // Create a new row
    var newRow = tableBody.insertRow();

    // Create cells for the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    // Assign values to the cells
    cell1.innerHTML = tableBody.rows.length; // Incremental numbering
    cell2.innerHTML = "Mukhriz Jamil Asoka";
    cell3.innerHTML = "mukriz@corp.jo";
    cell4.innerHTML = "651181187223";

    // Add onclick event to delete the row when clicked
    newRow.onclick = function() {
        tableBody.deleteRow(this.rowIndex);
    };
}

// Function to add table header
function addTableHeader() {
    // Get the table
    var table = document.getElementById("employeeTable");

    // Create a header row
    var headerRow = table.createTHead().insertRow(0);

    // Create header cells
    var headers = ["#", "Name", "Email", "Phone #"];
    for (var i = 0; i < headers.length; i++) {
        var cell = headerRow.insertCell(i);
        cell.innerHTML = headers[i];
    }
}

// Call the functions to add record and table header
addRecord();
addTableHeader();
