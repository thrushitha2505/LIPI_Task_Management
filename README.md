# LIPI_Task_Management

# Task Management System API
A backend application for managing tasks with creation, updating, deletion, search, and marking status as completed.

# Setup
Clone the repository
git clone 
cd task-management-system

# Installation
npm install

# ENV file
Create an .env file and update the details of DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT from env_template_dev

# To run the project
npm start

# For API testing in postman
## CreateTask API : 
POST Request
URL: {{base_url}}/api/createTask/
payload:{
  "title": "Sample Task",
  "description": "This is a sample task for testing",
  "due_date": "2025-02-01"
}

## GetTasks API:
GET Request
URL: {{base_url}}/api/tasks

## UpdateTask API:
PUT Request
URL: {{base_url}}/api/updateTask/:id
payload:{
  "title": "Updated Task Title",
  "description": "Updated description"
}

## completeTask API
PUT Request
URL :{{base_url}}/api/tasks/:id/complete

## DeleteTask API:
DELETE Request
URL: {{base_url}}/api/tasks/:id