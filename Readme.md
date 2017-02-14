# Url Shortener Microservice

##  About
Takes in a url, shortens it, then makes it availabel for use.

## How to use it
 - Pass a url to https://damp-sierra-41060.herokuapp.com/new/{link-here}
  - Where {link-here} is in the format of http://google.com or https://google.com
  - Example: https://damp-sierra-41060.herokuapp.com/new/http://google.com

 - Application will then return the original passed url as well as a shortened url that you can than use
  - Example: https://damp-sierra-41060.herokuapp.com/2

## Where to use it
Working Heroku Version: [Link](https://damp-sierra-41060.herokuapp.com/)

## Build it
* Clone the repo `https://github.com/tyrantwarship/basejumps-url-shortener-microservice`
* Install the dependencies locally npm install
* Run the development server (nodemon is used to reload the app after changes) `npm run dev`
* Edit index.js with editor of your choice
* Point your browser to localhast:8080 by default
