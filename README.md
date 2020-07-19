# Safe_Protests

From the womens' suffrage movement to Martin Luther King Jr.'s rallies, citizens has always relied on protests and public demonstrations to make change happen. With recent events in mind, it is becoming apparent that protesters need a way to protect themselves and stay informed during the middle of a protest or strike. Safe Protests is an app for organizing and staying safe during protests, providing live updates from protest organizers, information about protester rights, marking dangerous locations on a live-updated map, and the ability to notify contacts with a participant's last location if something goes wrong.

We are addressing the "Community" category (SDGs: 16 and 17) and the "The Environment" category (SDG: 13).

Video Demo:

## What inspired you to make this product?
We were inspired by the recent BLM protests around the world after the death of George Floyd at the hand of a police officer. We wanted to create a web app that was able to help citizens safely practice their right to free speech and protest. 

## What does your product do?
SafteyProtest is a web application that helps citizens safely organize and participate in protests. Users can submit information about a new protest to alert the rest of the users or view details on a protest happening near them. The web app also provides resources to aid a user during a protest. They can mark locations with heavy police presence or the use of force to alert other users. The app provides a page with information pertaining to users' legal rights during protest for three different countries. Finally, the app also provides a list of common tips so that the user can protest safely.

## How did you build your product?
We built our product using the MERN stack (MongoDB, Express, React and Node.js), with React for the frontend and MongoDB, Express and Node for the backend. We also used serveral npm packages and API's including Twilio's API. 

## What challenges did you run into?
We initially wanted to create a mobile app using Android Studio, Kotlin and Flutter. However, some of our group members had trouble setting up Google Flutter on MacOS. Similarily, when transitioning to React Native we were unable to connect to our android simulator, thus we decided to leverage our knowledge of MERN and create a fullstack web application. 

## Are there any accomplishments you are proud of?
We're proud of our REST API server, which efficiently inserts and retrieves data from MongoDB to run all of the processes for the app. We're also proud of our integration with Twilio to send text messages as part of our "Emergency Button" feature, which sends a protester's chosen contact a message if the protester is injured, being detained etc. Furthermore, we are proud of the fact that we built our application's user interface from scratch, we didn't use any templates, styling packages or dependencies to design our project. 

## What did you learn through this process?
We learned how to effectively setup MongoDB, use twilio API, create an Express server, route in React.

## What's next for your product?
Next steps for Safe Protests: 
* Deploy our web app to Android and iOS. 
* Expand the features available in the app (automated alerts in the case of police violence during rally's. 
* Utilize the web platform to its full potential - allow the organization of online, global-scale protests.

## How to run the application

1. Run `git clone https://github.com/sunny-zuo/safe-protests.git` in your command line
2. `cd` into the project directory
3. Open up two command lines, type `cd client` in one and `cd sever` in the other
4. In each command line execute the command `npm i` to install all the required dependencies and packages
5. In the "client" directory, run `npm start` to initate the React development server
6. In the "server" directory, run `node index.js` to startup the express server
7. You're all done!

This project was made between July 18-20, 2020 for the SetHacks

Team members:

Carol Xu, Rahul Aggarwal, Sunny Zuo, Umar Yousafzai
