# Notify Me Webapp

## Table of contents

1. [Introduction](#introduction)
2. [Needed Software](#needed-software)
3. [Installation Manual](#installation-manual)
4. [Custom Backend](#custom-backend)
5. [How to Register](#how-to-register)
6. [Code Formatting & Linting](#code-formatting-and-linting)
7. [Using NVM for Node.js](#using-nvm-for-nodejs)
8. [Yarn Commands](#yarn-commands)
9. [Project Owner](#product-owner)

---

## Introduction

This README describes the web application **Notify Me**.

Ever had that special bag or coat you wanted to buy, but it’s always sold out? With **Notify Me**, you can subscribe to an item and receive notifications when it’s back in stock.

Through this web app, you can track any item, view its status, and access past data regarding its availability, such as **out of stock** or **in stock** notifications.

**Home Page:**

![Home](./src/Assets/home_page.png)

**Profile Page:**

![Profile](./src/Assets/user_page.png)

This project was created using [Create React App](https://github.com/facebook/create-react-app).

---

## Needed Software

Before starting, make sure you have the following software installed:

1. **Node.js** _(version v20.0.0 or higher)_
2. **Yarn** _(package manager for Node.js)_
3. **Git**
4. **Google Account** _(for authentication purposes)_

---

## Installation Manual

To run the project locally, follow these steps:

1. Open a terminal.
2. Clone the repository:

   ```bash
   git clone https://github.com/levi-bravenboer/NotifyMe-frontend.git
   ```

3. Navigate into the project folder and install dependencies:

   ```bash
   yarn install
   ```

4. Start the application:

   ```bash
   yarn start
   ```

Once the application is running, open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Custom Backend

This project uses a custom backend built with **Django Rest Framework**, hosted on **Heroku**.

### Authentication

The API supports token-based authentication and session authentication. Ensure to include the appropriate authentication headers in your requests.

### Endpoints

1. **Items**

   - **URL:** `/api/items/`
   - **Method:** GET, POST
   - **Description:** Manage items. Supports listing and creating items.
   - **Authentication:** Required

2. **Users**

   - **URL:** `/api/users/`
   - **Method:** GET, POST
   - **Description:** Manage users. Supports listing and creating users.
   - **Authentication:** Required

3. **Authentication**

   - **URL:** `/api/auth/`
   - **Method:** POST
   - **Description:** Authenticate users and obtain tokens.
   - **Authentication:** None

4. **JWT Authentication**

   - **URL:** `/api/auth/`
   - **Method:** POST
   - **Description:** Authenticate users using JWT.
   - **Authentication:** None

5. **Application Status**
   - **URL:** `/api/status/`
   - **Method:** GET
   - **Description:** Retrieve the current status of the application.
   - **Response:**
     ```json
     {
       "cold_start": false,
       "database": true,
       "services": true
     }
     ```
   - **Authentication:** None

---

## How to Register

1. Click the **Login** button on the website.
2. Select the **Register** link.
3. Fill out the registration form.
4. After submitting, check your email for the activation link.
5. Copy the URL from the activation email, paste it into your browser, and change the protocol from `https` to `http`.

> **Note:** Because of former bugs, I created a fixed account for a broken email flow from the backend.
> During testing the flow works for me, this is just in case of emergency
>
> **Username:** test-gebruiker@levibravenboer.nl  
> **Password:** Password123

---

## Code Formatting & Linting

This project uses **Husky**, **Prettier**, and **ESLint** to enforce code quality and consistent formatting.

### Husky Pre-commit Hook

Husky is used to run **ESLint** and **Prettier** checks before each commit. If any files don't meet the linting or formatting requirements, the commit will be blocked until the issues are fixed.

To configure Husky, Prettier, and ESLint:

1. **Husky**: Pre-commit hooks are set up in the `.husky/pre-commit` file, which runs `lint-staged` to automatically format and lint staged files.
2. **ESLint**: Enforces coding standards and catches syntax errors.
3. **Prettier**: Formats the code consistently based on rules defined in the `.prettierrc` file.

### Commands:

- **Format Code**: Run Prettier to format the entire codebase:

  ```bash
  yarn format
  ```

- **Lint Code**: Check the code for linting errors:

  ```bash
  yarn lint
  ```

Both formatting and linting are automatically triggered before committing code using Husky and `lint-staged`.

---

## Using NVM for Node.js

This project requires **Node.js v20.0.0** or higher. It’s recommended to use **Node Version Manager (NVM)** to manage your Node.js versions efficiently.

### Installing NVM

To install NVM, follow these steps:

1. **Linux & macOS**:

   Open a terminal and run:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

   After installation, add the following to your `.bashrc` or `.zshrc` file:

   ```bash
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

   Then, restart your terminal or run:

   ```bash
   source ~/.bashrc
   ```

2. **Windows**:

   Download and install NVM for Windows from the official [NVM Windows repository](https://github.com/coreybutler/nvm-windows/releases).

### Using NVM

Once NVM is installed, you can install and use Node.js v20.0.0:

1. Install Node.js v20:

   ```bash
   nvm install 20
   ```

2. Use Node.js v20:

   ```bash
   nvm use 20
   ```

3. Verify that Node.js v20 is being used:

   ```bash
   node -v
   ```

This ensures your project is using the correct version of Node.js as required.

---

## Yarn Commands

Here are the key Yarn commands available for this project:

- **`yarn start`**: Runs the project in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`yarn build`**: Builds the app for production. Creates optimized JavaScript, HTML, and CSS files ready for deployment.
- **`yarn lint`**: Runs ESLint to check for coding errors.
- **`yarn format`**: Runs Prettier to format the codebase.

---

## Project Owner

This project was created and is maintained by **Levi Bravenboer**.

- [GitHub Profile](https://github.com/levi-bravenboer)

---

### Notes

For any questions or issues regarding the project, feel free to contact the project maintainers or check the documentation linked above.
