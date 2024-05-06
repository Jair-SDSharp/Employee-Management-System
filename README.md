# Employee-Management-System

This is a simple employee management system implemented in JavaScript using Node.js and Express.js. It provides a RESTful API for managing employee data, including functionalities to add, edit, delete, and list employees.

## Deployment Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Git (optional, if you want to clone the repository)

### Installation

1. Clone the repository:

````
git clone https://github.com/your-username/employee-management-system.git
````

2. Navigate to the project directory:

````
cd employee-management-system
````

3. Install dependencies:

````
npm install
````

### Usage

1. Start the server:

````
npm start
````

2. Use a REST API client like Postman or cURL to interact with the API endpoints.

- Add Employee: Send a POST request to /employees with JSON payload containing employee data (ID, name, lastName, post, department, salary).

````
curl -X POST \
  http://localhost:3000/employees \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 1,
    "name": "John",
    "lastName": "Doe",
    "post": "Manager",
    "department": "Sales",
    "salary": 50000
  }'
````

- Edit Employee: Send a PUT request to /employees/:id with JSON payload containing updated employee data.

````
curl -X PUT \
  http://localhost:3000/employees/1 \
  -H 'Content-Type: application/json' \
  -d '{
    "salary": 55000
  }'
````

- Delete Employee: Send a DELETE request to /employees/:id.

````
curl -X DELETE \
  http://localhost:3000/employees/1
````

- List Employees: Send a GET request to /employees.

````
curl -X GET \
  http://localhost:3000/employees
````

## Environment Variables

You can customize the application behavior using the following environment variables:

- PORT: Specifies the port on which the server will listen. Default is 3000.
