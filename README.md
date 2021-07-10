# Note-Taker
An application to write and save notes.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## DESCRIPTION

This application uses an Express.js back end and saves and retrieves note data from a JSON file.

The application’s front end deploys to Heroku.

## TABLE OF CONTENTS

- [DESCRIPTION](#description)
- [DEVELOPMENT CRITERIA](#development-criteria)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [TESTS](#tests)
- [TECHNOLOGIES USED](#technologies-used)
- [LINKS](#links)
- [QUESTIONS](#questions)


## DEVELOPMENT CRITERIA

The following acceptance criteria was used to guide the development of this project:
  
- [x] GIVEN a note-taking application
- [x] WHEN I open the Note Taker
- [x] THEN I am presented with a landing page with a link to a notes page
- [x] WHEN I click on the link to the notes page
- [x] THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- [x] WHEN I enter a new note title and the note’s text
- [x] THEN a Save icon appears in the navigation at the top of the page
- [x] WHEN I click on the Save icon
- [x] THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- [x] WHEN I click on an existing note in the list in the left-hand column
- [x] THEN that note appears in the right-hand column
- [x] WHEN I click on the Write icon in the navigation at the top of the page
- [x] THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## INSTALLATION

1. Fork the [repository](https://github.com/merewall/Team-Profile-Generator) from [GitHub](https://github.com/) to your profile.
2. Clone the repository down to your local machine in command-line using: `git clone`.
3. Node.js is required to run this application. Click [here](#installing-nodejs) for instructions on installing Node.js.
4. Install the dependencies of [express package](https://www.npmjs.com/package/express) and the [uuid package](https://www.npmjs.com/package/uuid) to your cloned directory in command-line using: `npm install` OR install them individually:
    * Install the [express package](https://www.npmjs.com/package/express) to your cloned directory in command-line using: `npm install express`.
    * Install the [uuid package](https://www.npmjs.com/package/uuid) to your cloned directory in command-line using: `npm install uuid`.

    

    ###### Installing Nodejs

    1. Check if you already have Node.js in command-line by typing `node`.
    2. If you have Node.js on  your machine, a message similar to `Welcome to Node.js` will appear.
    3. If you do not have Node.js, an error message will appear and you need to download it.
    4. To download Node.js, click [here](https://nodejs.org/en/download/).
    5. After download and installation is complete, restart your command-line terminal and redo step 1 to confirm a successful installation.
    6. After Node.js is on your local machine, return to the [installation](#installation) instructions for this project's application above.

## USAGE

1. Open command-line terminal on your local machine.
2. Navigate to the cloned directory of the application on your local machine using `cd`, if not already there.
3. If you haven't already, be sure you followed all [installation](#installation) instructions to install node, express, and uuid dependencies.
4. Initialize the application in command-line using: `node server.js`.
5. Verify the functionality via the browser and localhost port. (i.e. http://localhost:8080/).
6. Use a platform to deploy the application, such as [Heroku](https://www.heroku.com).

_Example of deployed application home page._
![Application homepage]()

_Examples of notes page with saved notes._
![Notes page with saved notes]()

_Example of saved note rendered to active note area._  
![Saved note as active note]()

_Demo of Note Taker application._  
![Note Taker Demo]()

## LICENSE

This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## CONTRIBUTING

If you'd like to contribute to the project, please create a pull request on a new branch of the [repository](https://github.com/merewall/Note-Taker) for review.

## TESTS

No tests are created for this application.
## TECHNOLOGIES USED

- [X] HTML5
- [X] [Bootstrap](https://getbootstrap.com/docs/3.4/css/)
- [X] JavaScript
- [X] [Node.js](https://nodejs.org/en/)
- [X] [Express](https://www.npmjs.com/package/express)
- [X] [uuid](https://www.npmjs.com/package/uuid)
- [X] [File System](https://nodejs.org/api/fs.html)
- [X] [Heroku](https://www.heroku.com)
## LINKS

* The [repository](https://github.com/merewall/Note-Taker) for this application.
* The [deployed Note Taker application](https://note-taker-mwall.herokuapp.com/).

## QUESTIONS

For any questions, please check out my GitHub profile or send me an email:
* GitHub: [merewall](https://github.com/merewall)
* Email: mlwall@alumni.princeton.edu

