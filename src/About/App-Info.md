# MVC Framework


## Models

A Model represents an abstraction of the table in the database. Instances of this class represent a database row.<br>
We Will use this models to manipulate the data in the DB tables.<br>

## Views

Will be the return to the client. In this particular application, since we are using API REST, the return to the front-end will be just a JSON that will be manipulated by ReactJS or React Native.

## Controllers
Entry point of the application. Usually the routes are associate with one of the methods of this controller. Will be responsible for the business logic. <br>
The controller should be a **`class`** **with only 5 methods**.
```javascript
  class UserController {
    index() {} // Show all users
    show() {} // Show a single user
    store() {} // Create a user
    update() {} // Update a user
    delete() {} // Remove user
  }
```

The controller, in this application, can create an user based on the data coming from `req.body`.<br>
This because the User's **model** already defined which fields are acceptable, and if any other data is passed, it won't be used.



