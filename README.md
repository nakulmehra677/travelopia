# Travelopia Assignment

## Description

Presidio's front end React application.

### This application uses following technologies -

- [React](https://reactjs.org/)
- [MUI](https://mui.com/material-ui/getting-started/overview/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Testing Library](https://testing-library.com/)
- [Font](https://fonts.google.com/specimen/Rubik)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies

All dependencies are listed in the [package.json](https://gitlab.t-3.com/presidio/presidio-web/-/blob/development/package.json) file, which is located in the root folder of the project.

## Available Scripts

In the project directory, you can run:

### `npm i`

This will install all of the dependencies to run the app in development environment

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Launches the documentation of UI components.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

### `npm run lint`

Looks for linting errors\
Linting configuration can be modified in `.eslintrc.js` file in root level of project

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## File Structure

### Explanation:

- **`/src/`**: It is the project's source directory.
  - `index.js`: Source all react components
  - **`/api/`**: Contains the fetch.js file which is the single source to call API
  - **`/components/`**: Contains the Presentational UI components.
     - **`/*/`**: Name of the component.
       - `index.js`: Contains the actual code of the component.
       - `*.stories.js`: Contains the story of that particular component
       - `*.test.js`: Contains the test cases of that particular component
      
  - **`/hooks/`**: Contains the custom hooks
  - **`/pages/`**: Contains root component for each page
  - **`/providers/`**: Contains the wrapper components
  - **`/styles/`**: Contains files that are required for styling
      - `color.js`: Contains colour codes.
      - `theme.js`: Contains the default props and overridden styles of MUI components

## How to use this app

This app contains two pages

### `/` 

This is the app's home page where the user can see a list of flights and some of their details like flightNumber, airline, origin, destination, departureTime, status in the form of a table. Users can sort the column in ascending/descending order by clicking on the header title of the column. By clicking on each item, the app will redirect the user to the detailed page of that particular flight.

### `/flight-details/*`

This page shows a detailed view of a flight. There is also a button at the bottom through which user can go back to the home page.