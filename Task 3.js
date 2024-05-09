// Define the function to create a product object
function createProduct() {
    // Get the input values
    var productName = document.getElementById("productName").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    // Create the product object
    var product = {
        productName: productName,
        quantity: quantity,
        price: price
    };

    // Display the product details
    var productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = "<p><strong>Product Name:</strong> " + product.productName + "</p>" +
                                "<p><strong>Quantity:</strong> " + product.quantity + "</p>" +
                                "<p><strong>Price:</strong> $" + product.price + "</p>";
}

// Define the function to create a book object
function createBook() {
    // Get the input values
    var bookName = document.getElementById("bookName").value;
    var authorFName = document.getElementById("authorFName").value;
    var authorLName = document.getElementById("authorLName").value;

    // Create the book object
    var book = new Book(bookName, authorFName + " " + authorLName);

    // Display the book details
    var bookDetails = document.getElementById("bookDetails");
    bookDetails.innerHTML = "<p><strong>Book Name:</strong> " + book.bookName + "</p>" +
                            "<p><strong>Author Name:</strong> " + book.authorName + "</p>" +
                            "<p><strong>Price:</strong> $" + book.price.toFixed(2) + "</p>";
}

// Define the function to create a manager object
function createPropertyManager() {
    // Get the input values
    var managerName = document.getElementById("managerName").value;
    var branch = document.getElementById("branch").value;

    // Create the manager object
    var manager = new Manager(managerName, branch);

    // Display the manager details
    var managerDetails = document.getElementById("managerDetails");
    managerDetails.innerHTML = "<p><strong>Manager Name:</strong> " + manager.managerName + "</p>" +
                                "<p><strong>Branch:</strong> " + manager.branch + "</p>";
}

// Define the product object
var product = {
    productName: "Example Product",
    quantity: 10,
    price: 50.99
};

// Access and display properties
console.log("Product Name: " + product.productName);
console.log("Quantity: " + product.quantity);
console.log("Price: $" + product.price.toFixed(2));

// Task 2: Create object book
function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
}

// Add prototype property price
Book.prototype.price = 20.99;

// Task 3: Create Parent object Employee and Child object Manager
function Employee(employeeName, employeeId, salary) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.salary = salary;
}

function Manager(managerName, branch) {
    this.managerName = managerName;
    this.branch = branch;
}

// Inherit properties from Employee to Manager
Manager.prototype = Object.create(Employee.prototype);

// Create instances
var employee = new Employee("John Doe", "E123", 50000);
var manager = new Manager("Alice Smith", "Sales");

// Display all properties
console.log("Employee Name: " + employee.employeeName);
console.log("Employee ID: " + employee.employeeId);
console.log("Salary: $" + employee.salary.toFixed(2));

console.log("Manager Name: " + manager.managerName);
console.log("Branch: " + manager.branch);
