<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

<p align="center">
  <a href="#">
    <img alt="Made by Alvaro-Vargas" src="https://img.shields.io/badge/MadeBy-Alvaro--Vargas-brightgreen">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## :rocket: About

This project is part of the GoStack boot-camp by Rocketseat. It is a complete application (Back-end, Front-end e Mobile) for a fictional transporter: **FastFeet**. <br>

![](https://media.giphy.com/media/9tA6H1madRvUc/giphy.gif)

### Requirements
1. Authentication
    - A user should be able to login with email/password
    - Authentication via JWT
2. Recipient management
    - Create/update
    - This should only be done by admins authenticated in the application.
    - Entry validation using YUP.
    - Recipients cannot login into the application
3. Deliveryman management
    - Create/Update/List/Delete
    - Only admins should be able to manipulate this data
4. Orders management
    - Only admins can place orders to be delivered
    - Orders can only be picked up from 8am to 6pm (start_date).
    - When an order is assigned to a deliveryman, he receives and e-mail with order details
5. Deliveryman features
    - Check delivery/orders assigned to them
    - Change delivery status (picked up/Delivered)
    - The delivery signature will be filled with an image (picture)
    - Delivery problems

---

### Dependencies

- **Yarn** - Package Manager
- **Express** - Web Framework
- **Sucrase** - Allow to use more recent JS functionalities.
- **Nodemon** - Monitor changes and restart the server
---
#### Style Guide :mag:
- **ESLint** - Style guide: Airbnb
- **eslint-config-prettier** - Turns off all rules that are unnecessary or might conflict with Prettier.
- **eslint-plugin-prettier** - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- **Prettier** - Code formatter
---
#### Auth / Login :closed_lock_with_key:
- **bcryptjs** - Create/Validate password hash
- **jsonwebtoken** - Create/validate sessions
___
#### DB :open_file_folder:
- **Sequelize** -  Node.js ORM for Postgres
- **sequelize-cli** - Sequelize Command Line Interface (CLI)
- **YUP** - Schema validation
- **pg** - Non-blocking PostgreSQL client for Node.js
- **pg-hstore** - Serializing and deserializing JSON data to hstore format
- **mongoose** - Mongodb object modeling for node.js
---
#### Exception treatment
- **@sentry/node** - Package to connect to Sentry
- **express-async-errors** - Express cannot cath `async` errors. This extension solves that
- **youch** - Error message treatment
---
#### Email :email:
- **nodemailer** - Module for email sending.
- **express-handlebars** - Handlebars view engines for Express
- **nodemailer-express-handlebars** - Generate html emails.
---
#### Miscellaneous :crystal_ball:
- **date-fns**  - Date utility library
- **multer** - Node.js middleware for handling `multipart/form-data`, primarily used for uploading files.
- **bee-queue** - job/task queue for Node.js, backed by Redis.
---

### Frontend
- RactJs - Web
- React Native - Mobile


# Tools
### Insomnia

REST Client. <br>
[Check it out!](https://insomnia.rest/)

### Docker Desktop Community
Container images.

Images used:
  - Postgres: Relational DB. Store information from the application.
  - MongoDB: Stores the notifications.
  - Redis:Alpine: Queues

### Postbird
PostgreSQL GUI client. <br>
[Check it out!](https://www.electronjs.org/apps/postbird)

### MongoDB Compass Community
GUI for MongoDB. <br>
[Check it out!](https://www.mongodb.com/products/compass)

### Mailtrap
SMTP testing server. <br>
[Check it out!](https://mailtrap.io/)

### Sentry
Error monitoring
[Check it out!](https://sentry.io/welcome/)

### VSCode 👨🏻‍💻

#### Plugins:
**Code Spell Checker** - streetsidesoftware.code-spell-checker <br>
Simple spell checker

**Color Highlight** - naumovs.color-highlight <br>
Style css/web colors found in the document

**Dracula Official** - dracula-theme.theme-dracula <br>
Dark Theme for VSCode

**EditorConfig for VS Code** - editorconfig.editorconfig <br>
User/Workspace settings

**ESLint** - dbaeumer.vscode-eslint <br>
Integrate ESLing with VSCode

**Markdown Preview Github Styling** - bierner. markdown-preview-github-styles <br>
Markdown Preview to help with the ReadMe/documentation.

**Github Markdown Preview**- bierner.github-markdown-preview <br>
Markdown Preview to help with the ReadMe/documentation.

**Material Icon Theme** - pkief.material-icon-theme <br>
Folder icons.

**DotENV** - mikestead.dotenv <br>
.env syntax highligh.

##### Personal config
```javascript
  "editor.rulers": [80, 120],
  "editor.renderLineHighlight": "gutter",
  "editor.tabSize": 2,
  "terminal.integrated.fontSize": 14,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "editor.parameterHints.enabled": false,
  "breadcrumbs.enabled": true,
  "javascript.suggest.autoImports": false,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "window.zoomLevel": 0,
  "explorer.compactFolders": false,

  //automatic fix for ESLINT
  "[javascript]": {
    "editor.codeActionsOnSave":{
      "source.fixAll.eslint": true,
  },

  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave":{
      "source.fixAll.eslint": true,
    },
  },

  //Emmet
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
```
---
This project is under MIT License. :pencil:
