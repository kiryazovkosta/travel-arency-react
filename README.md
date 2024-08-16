# kkiryazov - Travel Agency React project used for Softuni's course ReactJS - Juny 2024

| Contents
|---
| [Structure](#structure)
| [Run](#run)
| [Tools and Libraries](#json-store)
| [Features](#features)
| - [Without authentication users](#unauthentication-users)
| - [Logged users](#logged-users)
| - [Administrator](#administrator)

## Structure

This is a React application for course project in a module "ReactJS - June 2024". My username int oSoftuni's system is kkiryazov

## Run

You need to have Node.js installed to run and use this system

It is currently set to use a server in render.com. If you want to use it with local Softuni Practice Server you need to do following steps
```
Change url of backend into /client/src/services/*services.js to http://localhost:3030
cd server
node ./server.js
```

To run the application you need to perform the following steps
```
1. cd client
2. npm install
3. npm run dev
```

## Tools and Libraries

This application uses the following technologies and libraries
1. React Js
2. React-Toastify - used for notification
3. Jest unit testing framework
4. Cloudinary cloud for image storage
5. Hooks, Context, React Router and more
6. 

## Features

The application provides the following functionality. The core entity is package

### Without authentication users
The following functionality of the system is available to all users who have not authenticated
* Visit a home page /home
* Visit an About page /about
* View all provided services /services
* View all provided destination /destination
* View all packages /package
* View specific package /package/:id ( detailed data + reviews)
* View teams /team
* Send a message through contact form at /contact 
* Register for application newsletter at all page by unique email.
* Search specific package by pattern at search form
* Create a user /register
* Login into system /login

### Logged in users
The following functionality of the system is available to all ie users who are authenticated +  functionality of the system for users who have not authenticated
* Logout /logout
* Write review for specific package /package/:id/reviews
* View all reviews for package
* Edit/Delete own reviews
* Create a booking /package/:id/booking

### Administrator
The following functionality of the system is available to all ie users who are authenticated as Admin users + functionality of the system for authenticated users
* Create a destination /destinations/create
* Create a package /packages/create
* View list of created bookings /bookings
* Vist list of all created contact's messages /contacts
* View list of all registered for our newsletter /newsletter
* Upload a image to to Cloudinary /upload-image