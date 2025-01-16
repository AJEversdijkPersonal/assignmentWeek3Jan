# Assignment

Bank's software is mainly used to get insights on customer transactions. Within this assignment there is some backend software created to spin up a NodeJS service which serves a transactions file. Create an Angular application where a user can see their transactions in in list (timeline).

The requirements are:

- All transactions should be shown
- All transactions should be showed grouped based on date and ordered (newest on top)
- The information in the timeline should only show `otherParty.name` and the `amount` in EUR. (Be aware there is some USD as well, need to convert it based on the rate)
- When clicking on a transaction you should navigate to a detail page showing the more in-depth details
- It would be nice if there is some sort of styling (scss)

In addition to the code, consider other matters that you consider as part of your work.

## Thats it, happy 💻!

## Installation and Usage

### usage

Made this application as a technical assesment for rabobank. The technical requirements are listed on top.

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd /path/to/backend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the backend service:
   ```sh
   npm run start:windows || npm run start:mac
   ```

### Frontend Setup

1. Install the dependencies:
   ```sh
   npm install
   ```
2. Start the Angular application:
   ```sh
   ng serve
   ```

### Accessing the Application

Open your browser and navigate to `http://localhost:4200` to view the application.

## Troubleshooting

- Ensure that both backend and frontend services are running.
- Check the console for any errors and follow the suggested solutions.

## Additional Notes

- Make sure to update the currency conversion rates regularly.
- Follow best practices for Angular and Node.js development.
- Ensure proper error handling and validation in the application.
- Test the application thoroughly before deployment.
