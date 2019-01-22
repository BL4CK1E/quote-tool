# Quote Tool (Personal Project)

A fullstack NodeJS, Express, Postgres & React Application for creating beautiful proposals.

#### Packages
This project will be made up of 3 packages (services):

- `./src/api` (API Server based on Express)
- `./src/web` (ReactJS Website)
- `./src/doc` (PDF Document Generation)
 

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

***WARNING:*** This project does not use a CSS Framework, If you don't like CSS, dont touch!    

Start development with the following command, thankfully hot-reloading is included with `create-react-app`:
```
$ npm start
```

#### Backend (PDF Generator) `/src/doc`

`TBC - Hasn't been worked on yet`

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