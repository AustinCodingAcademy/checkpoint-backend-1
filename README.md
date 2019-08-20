### Summary

Your company's front end team has completed a business dashboard requested by management. You need to build the data server that will provide the front end client with the data it needs to show.

### Setup-done

- Fork, Clone, npm install
- You will need a database setup either locally or in the cloud
- remember to start your server
- Use postman to test your server, don't rely on the web page which is just for show.

### Create a server-need database

- npm install express and body-parser
- server/index.js
- connect to your database
- serve static files from the public folder

### Routes-done

- create get routes.
- look at data.csv. read this file and pull the information out of it
  - /dateTime - return the current time
  - /newComments
  - /newTasks
  - /newOrders
  - /tickets

### Database

- add 3 collections: messages, tasks, orders

### MVC

- create Routes, Models and Controllers
- Look at server/state.js
- create mongoose models that follow the example data
- create get routes, use the Models to get data from the database
  - /tasks
  - /orders
  - /messages
- create post routes, use the Models to insert data into the database
  - /tasks
  - /orders
  - /messages

### node-fetch-done

- The ceo likes to look at pictures of foxes while reading business reports
- install node-fetch
- make a route for /foxes
- make a http get call to https://randomfox.ca/floof/
- send back the image value

### Run Server

- Use postman to test that it is working
- If everything is coded properly, the client webpage should show the data from the server
- Use the network tab to inspect what http messages are being sent
