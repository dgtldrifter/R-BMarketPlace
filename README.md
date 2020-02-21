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
