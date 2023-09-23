const employeeList = document.getElementById("employee-list");

// Function to fetch employees from the JSON Server
async function fetchEmployees() {
  try {
    const response = await fetch('http://localhost:3000/employees'); // Replace with your JSON Server URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const employees = await response.json();
    displayEmployees(employees);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display employees on the web page
function displayEmployees(employees) {
  employeeList.innerHTML = ''; // Clear the list
  employees.forEach(employee => {
    const li = document.createElement('li');
    li.textContent = `${employee.name} - ${employee.position}`;
    employeeList.appendChild(li);
  });
}

// Fetch employees when the page loads
fetchEmployees();
