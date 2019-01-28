# Quote Tool (Personal Project)

A fullstack NodeJS, Express, Postgres & React Application for creating beautiful proposals.

#### Packages

This project will be made up of 2 packages (services):

- `./src/api` (API Server based on Express)
- `./src/web` (ReactJS Website)

## Development Setup

Clone the repository

```
$ git clone https://github.com/BL4CK1E/quote-tool.git
```

Run the installation script included in the root of the folder: `./dev.install.js`

```
$ node dev.install.js
```

#### Backend (GraphQL API) `/src/api`

To develop the Backend API you will require the following:

- Knowledge of `NodeJS, Express, TypeORM & GraphQL (Apollo)`
- A Postgres Database, just make sure you have the following ready:
  - Username: `<db_username> || postgres`
  - Password: `<db_password> || postgres`
  - Database: `<db_database_name> || 'proposify_db'`
- A Redis Installation (or Docker Instance), info below:
  - Local (UNIX): https://redis.io/download
  - Docker: https://hub.docker.com/_/redis
  - `Node-Redis` requires this as it looks for a connection at `127.0.0.1:6379`.

Start development with `Nodemon` if you want hot-reloading:

```
$ nodemon npm start
```

#### Frontend (ReactJS SPA) `/src/web`

This is based on `create-react-app`, so it isn't too complicated (...at this point in time), hoewever, you will require knowledge of `ReactJS, Apollo GraphQL Client (For Data Fetching), Apollo Link State (For State Management) & Styled Components for CSS-IN-JS`.

**_WARNING:_** This project does not use a CSS Framework, If you don't like CSS, dont touch!

Start development with the following command, thankfully hot-reloading is included with `create-react-app`:

```
$ npm start
```

## Features (Planned)

- App Authorisation

  - Registration (Admin Only)
  - Recovery (Email)

- Product Creation

  - Custom Product Creation
  - Description Setup
  - Recurring Values (W/M/Q/A)
  - Product Importation (Vendor Data Feeds)

- Proposal / Quote Creation
  - Cover Letter
  - Executive Summary
  - Pricing Summary
  - Discounts
  - Comments
  - Versioning
  - WYSIWYG Editor
- Proposal / Quote Presentation
  - Electronic Document Acceptance
  - Printable Document (PDF & Print)
- Platform Integration (ConnectWise)

  - Product Sync (Two Way)
  - Opportunity Sync (Two Way)

- Deployment
  - API & Doc
    - Docker & Docker Compose via Self Hosted
    - Docker via ZeitNOW (Requires Ext. DBaaS)
  - Website
    - ReactJS via Netlify
    - ReactJS via ZeitNOW

#### Features (Completed)

- App Authorisation
  - Login
  - Logout

## Memories

This section is resevered for any major screw ups (...data loss), or achievements (... bugs that couldn't be fixed), hopefully not too much gets added to this!

**_22-01-2019 - Merged like a total GIT_**

After a hard day working on this codebase, I got plenty of work done! With some time to kill at my in-laws I decided it would be an ideal time to add some information to this README to help other people with setting up a Dev environment shoult they ever want to help (... likely scenario).

Anyway - I decided create another branch, and then merged this into the master branch without commiting any previous changes! ... IDIOT! Even worse, I then decided to delete old stashes, which were actually the uncommited changes I had been working on all day today...

Luckily I came across this post that advised on how to recover from auto-stashes:

- https://stackoverflow.com/questions/89332/how-to-recover-a-dropped-stash-in-git

Anyway I managed to recover the stash, created a new branch, commited my files to it and then updated the README and the rest of the files / folder structure I was setting up! LUCKY!
