# drinks-service-api
In this lab, you’ll use the ExpressJS library to create a Web API to serve back JSON Responses based on a HTTP Request. You will be using a Test-Driven approach.

# 🧪👾 Welcome to API Lab 1

In this lab, you’ll use the ExpressJS library to create a Web API to serve back JSON Responses based on a HTTP Request. You will be using a Test-Driven approach.
ExpressJS is an extremely popular Node-based JavaScript framework which acts as a web server, allowing developers to create many different types of web application. In our 
case, it will provide the basis for us to create an API.
We will also be using TypeScript for this project 🥳

# 🛠 What do I need for this Lab?

You will need:

● Google Chrome Web Browser
● Visual Studio Code
● NodeJS
● Familiarity with TypeScript


# Objective of the project is the creation of tests using components following the MVC pattern:

- Routes: The paths that our server cares about, e.g. “/” or “/home”.
- Controllers: - Maps a route to the business logic. Controllers understand how to get the right data from a Request and what to put in a Response. But they don’t know anything about the actual application logic! That is the job of...
- Services: The actual business logic. These don’t know anything about routes or requests - they understand things like “I get the correct flavour of coffee” or “I retrieve the product by an id”. The service shouldn’t know about where the data is actually stored, that is the job of....
- Models: The underlying data layer. The services don’t know if data is in a database or a file or stored in memory or retrieved from some other system entirely. All of that is handled by Models, which do things like “get a product from the database by id” or “update the name of product with id [x]”.

# To execute the project

👉 Run `npm install` to install the project.

👉 To run the project `npm start`, will run on port 3000 (`http://localhost:3000`)

👉 To run the tests `npm test` 
