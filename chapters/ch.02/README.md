# Running tests
In this lesson, we walk through how to _setup_ our tests and _run_ them.

package.json
```json
{
  "scripts": {
    "test": "./node_modules/.bin/mocha './src/**/*.spec.js' --compilers js:babel-core/register"
  },
  "devDependencies": {
    "babel-core": "6.16.0",
    "babel-loader": "6.2.5",
    "babel-preset-es2015": "6.16.0",
    "babel-preset-react": "6.16.0",
    "babel-preset-stage-2": "6.16.0",
    "expect": "^21.2.1",
    "mocha": "^4.0.1"
  }
}

```

.babelrc
```json
{
  "presets": ["react", "stage-2", "es2015"]
}
```

### --compilers flag
Using `Babel` as a compiler to compile my React code and my ECMAScript 2016-2015 code back into JavaScript that will run in the browser today. Now we'll be `able to use modern syntax` in all of our test files.