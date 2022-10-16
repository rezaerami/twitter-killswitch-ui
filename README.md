# Twitter Killswitch

Twitter Killswitch bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

### Install dependencies

to install dependencies you can use ``yarn`` or ``npm``

run this command to install dependencies

**Install with Yarn**
```$xslt
yarn
```
**Or install with NPM**
```$xslt
npm install
```

### Setting up environment variables
first you need to make .env

```$xslt
cp .env.exampe .env
```
to change api url, set a new value for ``REACT_APP_API_BASE``

on production, it is recommended to set ``REACT_APP_DEBUG`` on false, so it creates an infinite loop when user requests 
the kill API so nobody can access it again, and it will crash the browser

## Available Scripts

In the project directory, you can run following scripts:

### Start

**Start with Yarn**
```$xslt
yarn start
```
**Or start with NPM**
```$xslt
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### build

**Build with Yarn**
```$xslt
yarn build
```
**Or build with NPM**
```$xslt
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
