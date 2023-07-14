# Shop System with React

This is a TypeScript project that implements a simple shop system where users can buy items - complete with a React frontend.

## Features

- Create and manage items in the shop.
- Create and manage users.
- Add items to a user's cart.
- Remove items from a user's cart.
- Remove a specified quantity of items from a user's cart.
- Calculate the total price of items in a user's cart.
- Manage your inventory with quantities of items.
- Uses MongoDB for data storage and retrieval.
- Uses a React frontend to deploy the shop system.

## Prerequisites

Before running the shop system, make sure you have the following installed:

- Node.js (v12 or higher)
- MongoDB

## Setup and Usage

1. Clone the repository:

   ```
   git clone https://github.com/HussainAther/CartRebornOOPReact
   ```

2. Navigate to the project directory:

    ```
    cd shop-system
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Start your MongoDB server:

* macOS/Linux: Open a new terminal and run mongod.
* Windows: Open a new command prompt and run "C:\Program Files\MongoDB\Server\{version}\bin\mongod.exe" (replace {version} with the version number of MongoDB you have installed).

5. Update the MongoDB configuration:

* Open the `database.ts` file in the src directory.
* Replace the MongoDB connection URL, database name, and collection names with your MongoDB setup.
* Save the changes to the database.ts file.

6. Build the TypeScript code:

    ```
    npm run build
    ```

7. Run the program:

    ```
    npm start
    ```

The shop system will now execute, interacting with the MongoDB database. You should see the output in the console, demonstrating the functionality of the shop system.

## Frontend Deployment
To deploy the React frontend of the shop system, follow these steps:

1. Build the React app:

    ```
    npm run build
    ```

2. Choose a hosting platform, such as:

* Netlify (https://www.netlify.com)
* Vercel (https://vercel.com)
* Firebase Hosting (https://firebase.google.com/products/hosting)
* Heroku (https://www.heroku.com)

3. Deploy to the hosting platform:

Follow the documentation provided by your chosen hosting platform to deploy your React app.
Typically, you will need to create an account, set up a new project or site, and configure the deployment settings.
The hosting platform will guide you through the steps to deploy your app, which may involve connecting to your code repository, specifying the build command, and configuring any necessary environment variables.
Test the deployed app:

Once the deployment process is complete, visit the URL provided by your hosting platform to see your app live.
Test the app's functionality and ensure that it works as expected in the deployed environment.
Make sure to test features such as fetching items, adding items to the cart, and performing any other interactions.
Set up a custom domain (optional):

If you have a custom domain, you can configure it to point to your deployed app.
Refer to the documentation of your hosting platform for instructions on how to set up a custom domain.

Monitor and maintain:

Keep an eye on your deployed app and monitor its performance, user feedback, and any reported issues.
Regularly update your app with new features, bug fixes, and security patches as needed.

## Dependencies
The project has the following dependencies:

* `TypeScript`: A typed superset of JavaScript that compiles to plain JavaScript.
* `uuid`: A package for generating UUIDs (Universally Unique Identifiers).
* `bootstrap`: A popular CSS framework for building responsive and mobile-first websites.

## License
This project is licensed under the MIT License.

