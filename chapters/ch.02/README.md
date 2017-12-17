# React Testing: Running tests

In this lesson, we walk through how to setup our tests and run them. We write a quick empty first test and assertion, so we can run the tests. Using Mocha, we can do this manually each time with the Mocha CLI. We can also automate this using task runner features from tools like Grunt, Gulp, Webpack, or npm scripts. In this course, we will use the common npm test script setup to run our tests. We will also use the Babel compiler to write our tests with modern JavaScript syntax.

Finally, I'm using `Babel` as a compiler to compile my React code and my ECMAScript 2016-2015 code back into JavaScript that will in the browser today. I need to add on the compilers flag, so I'll say compilers, and then I need to tell it to run Babel core, and now we'll be able to use modern syntax in all of our test files.


````json
"devDependencies": {
    "babel-core": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "expect": "^21.2.1",
    "mocha": "^4.0.1"
  },
  "presets": [
    "react",
    "es2015",
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ]
````