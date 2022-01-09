# Inhoudsopgave

1. Introduction
2. Lijst met benodigdheden
3. Installatie handleiding
4. Testen (JEST and Cypress)
5. Inloggegevens en hoe te registreren
6. Scripts NPM

# Introduction

This README descripse the webapp for Notify me.

Ever had that special bag or coat you wanted to buy, but it is always sold out? Checkout notify and subscripe to an item to get a notification from.

Within this webapp you can choose which item you want to follow and see all data we got from it earlier **out of stock / in stock status**.

Home:
![Home](./Assets/home_page_screenshot.png)

Profile page:
![Profile](./Assets/profile_page_screenshot.png)

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

### Testen

De unit testen zijn te vinden in de map: Tests/Register.test.js

De JEST testen zijn uit te voeren door het volgende commando in de terminal te runnen.

_npm run test_

### Custom backend

For this project their is a customer backend.
This backend is build with Django rest-framework and is hosted on heroku.

The end point documentation can be found here:

[SWAGGER DOCS](https://notifyme-be-staging.herokuapp.com/swagger/).
[REDOC DOCS](https://notifyme-be-staging.herokuapp.com/redoc/).

# How to login

- Voor deze applicatie is gebruik gemaakt van Firebase en de Firebase Firestore Database. Je hebt geen inlog gegevens of wachtwoord nodig.
- Via de registratiepagina kun je zelf een profiel aanmaken. Zgn _admin_ gegevens zijn niet nodig.
- De registratie kan alleen lukken als de postcode **6515** wordt gebruikt bij het inputveld voor postcode en woonplaats.
- Na registratie wordt je automatisch doorgelinkt naar je profiel pagina.
- Zodra je bent geregistreerd of ingelogd kun je een advertenties plaatsen.

# NPM scripts

- "start": Runs the project in development mode.
- "build": Makes a Javascript, HTML and CSS file for production

- "test": Runs the unit tests.
