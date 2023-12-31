﻿# Web2-Assignment1

This is a simple Node.js application integrated with a PostgreSQL database. The application provides a basic signup (`/` route), signin (`/123` route), and a sample site (`/321` route). It uses the `pg` library to interact with the PostgreSQL database.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a PostgreSQL database:

   ```bash
   psql -U postgres
   CREATE DATABASE newDB;
   ```

4. Update the database connection details in the `app.js` file:

   ```javascript
   const pool = new Pool({
     user: 'your_postgres_user',
     host: 'localhost',
     database: 'newDB',
     password: 'your_postgres_password',
     port: '5432',
   });
   ```

5. Run the application:

   ```bash
   npm start
   ```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Routes

- `/`: Signup route
- `/123`: Signin route
- `/321`: Sample site route

## Usage

1. Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
2. Sign up by providing an email and password.
3. Sign in with the same email and password on the `/123` route.
4. View the sample site on the `/321` route.

## Notes

- This is a basic example and should not be used as-is in a production environment.
- Ensure to handle passwords securely, preferably by hashing them before storing in the database.
- Use environment variables for sensitive information such as database credentials in a production environment.
