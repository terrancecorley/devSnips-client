# devSnips

devSnips is a web-based application which will allows users to create on-the-fly snips (code notes) in markdown and have the results be saved in html with correctly formatted code.

## MVP Features
* Sign-up/Log-in/Log-out
* User inputs markdown and the output is saved in html with correctly formatted code
* User can create, read, edit, and delete snips (code notes)

## Extended Features
* User can filter snips by title, newest-oldest, oldest-newest, and by tags
* User can create and delete tags
* User can associate multiple tags with multiple snips

### Tech Stack
* React for the frontend
* Redux for state management
* Node for the backend
* PostgreSQL for the database
* JWTs for authentication

### Possible NPM packages to use
* [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx)
* [markdown-react-js](https://www.npmjs.com/package/markdown-react-js)
* [react-markdown](https://www.npmjs.com/package/react-markdown)