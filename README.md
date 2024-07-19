# NoSQL-SocialNetwork-API

## Prerequisites
Make sure you have node installed on your computer
Make sure you have Insomnia installed on your computer
Make sure you have MongoDB installed on your computer. 

## How to run the program
- clone the repo
- open terminal and cd to the repo
- `npm i`
- `node server.js`


## Routes
- depending on what action you want to make (thoughts, make a user, reactions, etc... these will vary.)

To get all thoughts, use insomnia and go to `http://localhost:3001/api/thoughts`
- posting to the above route will create a new thought

To get a single thought, go to `http://localhost:3001/api/thoughts/:thoughtId`
- PUTting to this will allow you to update a thought. 
-DELETEing on this route will remove the thought from the database. 

To add a reaction (reply) to a thought, go to `http://localhost:3001/api/:thoughtId/reactions` with a POST request.


The schema stays the same for the users, except they are from the `http://localhost:3001/api/users` routes intsead. 


## Video Walkthrough
[Watch the video]('./assets/API_Demo.mp4)
