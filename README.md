# Inhoudsopgave

1. Introduction
2. Needed software
3. Installation manual
4. Custom Backend
5. How to register
6. Scripts NPM

# Introduction

This README descripse the webapp for Notify me.

Ever had that special bag or coat you wanted to buy, but it is always sold out? Checkout notify and subscripe to an item to get a notification from.

Within this webapp you can choose which item you want to follow and see all data we got from it earlier **out of stock / in stock status**.

Home:
![Home](./src/Assets/home_page.png)

Profile page:
![Profile](./src/Assets/user_page.png)

This project is created with: [Create React App](https://github.com/facebook/create-react-app).

# Needed software/accounts

1. Node.js _(versie v12.18.4 of hoger)_
2. NPM
3. Git
4. Google account

# installation manual

1. open a terminal
2. Clone the git repository.
3. Install node_modules by running this command: **npm install**
4. Start the application by running this command: **npm start**

Open http://localhost:3000 in a webbrowser

### Custom backend

For this project their is a customer backend.
This backend is build with Django rest-framework and is hosted on heroku.

The end point documentation can be found here:

When using urls from the activation email, please change the protocol in the url **https** to **http**

[SWAGGER DOCS](https://notifyme-be-staging.herokuapp.com/swagger/).
[REDOC DOCS](https://notifyme-be-staging.herokuapp.com/redoc/).

# How to Register

1. Go to Login button
2. Click the register link
3. Fill in the form
4. Open the activation email
5. Copy the url an paste it in a browser, change the protocol from **https** to **http**



# NPM scripts

- "start": Runs the project in development mode.
- "build": Makes a Javascript, HTML and CSS file for production
- "test": Runs the unit tests.
