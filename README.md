# Social Network API

## Description

Much like standard social media platforms, using Express.js for routing, a MongoDb database, and the Mongoose ODM, this application serves as an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation 

1. In your machine's native terminal, run the command `git clone git@github.com:AntonioRobledo/Social_Network_API.git` 
2. Once this git repo has been cloned, navigate to the root directory of the project and install dependencies using `npm i`
3. Start the server by running `npm start`
4. Navigate to Insomnia in order to test routes

## Usage 

From Insomnia, here are some routes you can use in testing endpoints:

# Users

* `GET /api/users` - Get all users
  
* `GET /api/users/:userId` - Get a single user by ID
  
* `POST /api/users` - Creates a new user
  
* `PUT /api/users/:userId` - Updates an existing user by their ID
  
* `DELETE /api/users` - Deletes a user by their ID

# Friends
* `POST /api/users/:userId/friends/:friendId` - Adds a user to another user's friend array

* `DELETE /api/users/:userId/friends/:friendId` - Removes a user from another user's friend array

# Thoughts
* `GET /api/thoughts` - Get all thoughts

* `GET /api/thoughts/:thoughtId` - Get a thought by it's ID

* `POST /api/thoughts` - Create a new thought

* `PUT /api/thoughts/:thoughtId` - Update a thought

* `DELETE /api/thoughts/thoughtId` - Removes a thought

# Reactions
* `POST /api/users` - Create a reaction

* `DELETE /api/users` - Removes a reaction

### Walk-through Video Link:

Social Network API video: https://drive.google.com/file/d/1KfzsPpAsz2OxMnnneBmK4_9JvHaKx5Hf/view

Bonus Feature: https://drive.google.com/file/d/1Z0yDRMy_pbUeXsyHe8y_nu740uU7y3SN/view