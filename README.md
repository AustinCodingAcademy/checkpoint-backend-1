### Setup
* Fork, Clone, npm install, npm start


### Summary
Your company's front end team has completed a business dashboard requested by management. You need to build the data server that will provide the front end client with the data it needs to show.

### Create a server
* npm isntall express
* server/index.js
* listen on port 3001
* connect to your mlab database

### Routes
* create get routes.
* look at data.csv. read this file and pull the information out of it
  * /dateTime - return the current time
  * /newComments
  * /newTasks
  * /newOrders
  * /tickets

### Database
* use mlab to create a database
* add 3 collections: messages, tasks, orders


### MVC
* create Routes, Models and Controllers
* Look at server/state.js
* create mongoose models that follow the example data
* create get routes, use the Models to get data from the database
  * /tasks
  * /orders
  * /messages
* create post routes, use the Models to insert data into the database
  * /tasks 
  * /orders
  * /messages 


### node-fetch
* The ceo likes to look at pictures of foxes while reading business reports
* install node-fetch
* make a route for /foxes
* make a http get call to https://randomfox.ca/floof/
* send back the image value


### Run Server
* start your server with "node index.js" and refresh the client webpage to make sure the data is populating properly. 

NOTE: Requires a .env file with SECRET.  E.g.,

SECRET="mongodb://<user>:<pwd>!<host>:<port>/<db>"




