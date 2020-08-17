# cv-observer

Express Backend for cv-graffiti -- allows for Server Sent Events to an observing browser.

## Requirements

You will need Node.js

## Instructions

1. First check out the repository from github.
2. Navigate into the directory. `cd cv-observer`
3. `/node_modules` have been included for ease of use, but in case this causes an issue, you can `npm install`

## Running the application

$ npm start
(This will run on port 3001)

## Requirements

#### As you draw in the browser window (in graffiti), the result should appear in realtime in another browser window.

## Decisions and Limitations

1. I chose to implement a backend server as I couldn't think of a simpler way to have a browser monitor data changes in order to mirror Graffiti.
2. CV-Graffiti (the React application) would POST data back to CV-Observer when a "doodle" was complete (This was meant to be a simpler solution, and when the system worked end-to-end, I would try to address point-by-point updates.
3. Then the observing browser (localhost:3001) would utilize Server Sent Events to get updated whenever there was a new doodle to draw.

## Other TODOs and Known issues

1. This does not work end-to-end as planned: There is a disconnect between POSTing the data and sending that same data packet out via SSE, which I was unable to resolve.
2. Due to lack of time, data validation, unit testing and even basic code consistency was not completed for this repository.
