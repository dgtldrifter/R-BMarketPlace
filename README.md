# R&B Marketplace

Application can be found at https://rbmarketplace.herokuapp.com/

### Instructions For Setting Up the Project

* run `npm ci` in the root directory
* `cd` into `marketplace-client` and run `npm ci`

### Running the Project on Local

You are going to need two command prompts, one in the project root, and one in the `marketplace-client` folder.

* Type `npm start` in the root directory and the server will use `localhost:5000`
* Type `npm start` in `marketplace-client` and the host will run on `localhost:3000`

* Local project can be accessed by using the `localhost:3000` server

Deployments to Heroku are automated. Please verify that code changes are correct when attempting a pull request.

### Anyone deploying their own version of the project
For Heroku, the thing that makes this all work is the `heroku-postbuild` script in the project's package.json.

The main `index.js` file in the project serves the files built from the react build script. So we need Heroku to be able
to run additional commands for the build to work properly, so after the main project gets build and running, we then have
the node build script `cd` into the `marketplace-client` folder, and run the `npm run build` script.

`index.js` then serves the built client files if anyone connects to anything other than defined API endpoints.

### Environment Variables
This project uses the library `dotenv`, so that you can add you own environment variables to the project. Currently,
this project uses three variables:
* `ATLAS_URL` - URL for the MongoDB server that you want to use. Does not include the protocol string at the front of the URL.
This is used in the index.js file in the root of the project
* `ATLAS_USER` - Command line username. This is used in the index.js file in the root of the project.
* `ATLAS_PASSWD` - Command line password. This is used in the index.js file in the root of the project.

To use these environment variables, you must create a file labeled `.env`, and you would enter the variable name, add
an `=` sign, and the the appropriate value for that variable. Those variables defined inside the `.env` file would then 
be accessed by calling `process.env.<variable_name>`.
