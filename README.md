A grouping of important and interesting things for React:

Components found is `source` format should be able to be used for NPM/Yarn install unless stated otherwise.

## Table of Contents

- [Important Third Party Libraries](#important-third-party-libraries)
  - [Redux](#redux)
  - [React Router](#react-router)
  - [Jest](#jest)
  - [Enzyme](#enzyme)
  - [Webpack](#webpack)
  - [Sass](#sass)
- [Awesome Third Party Libraries](#awesome-third-party-libraries)
  - [Semantic Ui](#semantic-ui)
  - [React Reveal](#react-reveal)
  - [Normalize.css](#normalize-css)
  - [Firebase](#firebase)

# Important Third Party Libraries

### [Redux](https://redux.js.org/#documentation)

Probably the best(not the only) solution for site wide state. Plugs in extremely well with React;

* `redux` - Contains the Provider and configure store functions
* `react-redux` - Most used import for redux: Contains the connect Higher Order component
* `redux-mock-store` - Used for testing alongside Jest

---

### [React Router](https://reacttraining.com/react-router/web/guides/philosophy)

Preferred use for React navigation. There are **TWO** types but for normal react applications we only use one:

* `react-router-dom` - Navigation around the site.

**Commonly used imports**

* Switch
* Route
* Navlink
* Link

---

### [Jest](https://facebook.github.io/jest/docs/en/api.html)

Nice testing suite that can be used for React and it's components to be used alongside Enzyme:

**Jest is already in Create-React-App scripts, therefore you do not need to install it here**

* `jest` - Testing suite

---

### [Enzyme](http://airbnb.io/enzyme/docs/api/)

Functions for testing to allow snapshots for React components:

**Needs setup for react 16+**

* `enzyme`
* `enzyme-adapter-react-16`
* `enzyme-to-json`
* `react-test-renderer`

You also need a `setupTests.js` file in `/src/` with the following:

```javascript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

A change also needs to be made to `package.json`:

```diff
...
+"jest": {
+    "snapshotSerializers": ["enzyme-to-json/serializer"]
+  },
...
```

---

### [Webpack](https://webpack.js.org/concepts/) 

Bundles and runs your site on a server (usually Express)

* `webpack` - Standard library
* `webpack-dev-server` - Used for testing your site while in development. **Install as a dev-dependency**

Also requires a config file: `webpack.config.js`
* Here you can change settings for bundling or work around environments

---

### [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

Better than normal css. Allows for imports of other stylesheets for better organization and for variables in the stylesheets.

**The following applies to a non-ejected create-react-app**

* `node-sass-chokidar` - Install this cli to allow to build the normal css files for older browsers.
* `src/**/*.css` - Add this to *.gitignore* to not push css files to source control.
* `npm-run-all` - Install this module to allow scripts to be run in parallel for dev and build purposes.

**Make the following changes to `package.json` scripts**

```diff
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
```

---

# Awesome Important Third Party Libraries

### [Semantic UI](https://react.semantic-ui.com)

Fantistic component set for react.

* `semantic-ui-css` - Place in `index.js` with `import 'semantic-ui-css/semantic.min.css'`
* `semantic-ui-react` - Standard import for Semantic components.

---

### [React Reveal](https://www.react-reveal.com/docs/)

If you want to apply basic animations to elements easily for react. Look no further.

* `react-reveal` - Standard import statement.
  * **PLEASE NOTE** Docs state you should import: `import Fade from 'react-reveal/Fade';` You can rather: `import { Fade } from 'react-reveal';`

---

### Normalize.css

To flatten out all browsers to start at the same base css

* `normalize.css` - Place in index.js(or equivalent) before other css imports: `import 'normalize.css/normalize.css';`

---

### [Firebase](https://firebase.google.com/docs/)

Fantastic cloud service provider by Google. Free package is incredible with a maximum of 10 projects at a time.

Pricing can be found [here](https://firebase.google.com/pricing/)

It contains:
* Hosting
* Databases
  * Realtime-Database
  * Firestore
* Cloud Functions
* And more...

**To use Functions and Hosting** you need to install the firebase cli: `npm install -g firebase-tools`

**Third Party installs**
* `firebase` - Standard lib for firebase tools.
* `react-redux-firebase` - Tools to link Firebase and redux
* `redux-firestore` - Tools to link Firestore specifically with redux
